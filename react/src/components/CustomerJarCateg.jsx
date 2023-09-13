import React from 'react'
import CategoryServices from "../services/CategoryServices";
import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css'
import { useHistory } from 'react-router-dom';
import Footer from './Footer';

export default function CustomerJarCateg() {

    const [myarray, setMyarray] = useState([]);

    const history=useHistory();
    useEffect(() => {
        CategoryServices.getCategory().then((res) => {
            console.log(res.data);
            setMyarray(res.data);
        })
    }, []);

    const handleBack = (description,capacity,price) => {

        history.push(`/CustomerOrder/${description}/${capacity}/${price}`)
    }

    const handleBack2 = () => {
        history.push("/CustomerHome")
    }

    return (
        <div className="form-group back4" align="center" >
            <br />
            <h2 align="center" >Category List</h2>
            <br />

            <div className="align-baseline">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Category Id</th>
                            <th>Capacity</th>
                            <th>Jar Type</th>
                            <th>Price</th>
                            <th>BuyNow</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myarray.map(
                                category =>
                                    <tr key={category.cgid}>
                                        <td>{category.cgid}</td>
                                        <td>{category.capacity}</td>
                                        <td>{category.description}</td>
                                        <td>{category.price}</td>
                                        <td><button className="btn btn-dark" style={{ marginLeft: "10px" }} onClick={()=>handleBack(category.description,category.capacity,category.price)} >Buy </button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <br />
            <br />
            <div align="center">
                <button className="btn" style={{ color: "black" }} onClick={handleBack2}>Back</button>
            </div>
            <br />
            <Footer></Footer>
        </div>
    );

}