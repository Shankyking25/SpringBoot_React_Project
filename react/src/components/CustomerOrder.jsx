import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import Footer from './Footer';


export default function CustomerOrder() {

    const history = useHistory();
    const { description, ccapacity, pprice } = useParams();
    const [cname, setCname] = useState("");
    const [caddress, setCaddress] = useState("");
    const [cemail, setCemail] = useState("");
    const [cmobile, setCmobile] = useState("");
    const [odate, setOdate] = useState("");
    const [jartype, setJartype] = useState(description);
    const [capacity, setJarcapacity] = useState(ccapacity);
    const [price, setJarprice] = useState(pprice);

    const RegisterCname = (e) => {
        setCname(e.target.value);
    }
    const RegisterCaddress = (e) => {
        setCaddress(e.target.value);
    }
    const RegisterCemail = (e) => {
        setCemail(e.target.value);
    }
    const RegisterCmobile = (e) => {
        setCmobile(e.target.value);
    }
    const RegisterOdate = (e) => {
        setOdate(e.target.value);
    }
    const RegisterJartype = (e) => {
        setJartype(description);
    }
    const RegisterJarcapacity = (e) => {
        setJarcapacity(capacity);
    }
    const RegisterJarprice = (e) => {
        setJarprice(price);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const Add = { cname, caddress, cemail, cmobile, odate, jartype, capacity, price };
        axios.post('http://localhost:8181/api/v1/RegularOrder/saveOrder', Add)
            .then((res) => {
                console.log(res)
                alert('Order Registered...');
                history.push("/Transaction");
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleBack = () => {
        history.push("/CustomerJarCateg")
    }


    return (
        <div class='back2'> <br />
            <h2 align="center">Order Details </h2><br />
            <form onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <table className='border border-dark' style={{ marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
                        <tr>
                            <td><label>Name : </label></td>
                            <td> <input
                                type='text'
                                name='cname'
                                value={cname}
                                placeholder="Enter your name"
                                onChange={RegisterCname}
                                required />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Address : </label></td>
                            <td> <input
                                type='text'
                                name='caddress'
                                value={caddress}
                                placeholder="Enter your address"
                                onChange={RegisterCaddress}
                                required />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Email : </label></td>
                            <td><input
                                type='email'
                                name=' cemail'
                                value={cemail}
                                onChange={RegisterCemail}
                                placeholder="Enter your email"
                                required />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Mobile No : </label></td>
                            <td> <input
                                type='text'
                                minLength={10}
                                maxLength={10}
                                name='cmobile'
                                value={cmobile}
                                onChange={RegisterCmobile}
                                placeholder="Enter your mobile"
                                required />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Order date : </label></td>
                            <td> <input
                                type='date'
                                name='odate'
                                value={odate}
                                onChange={RegisterOdate}
                                required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label> Jar type : </label></td>
                            <td>
                                <input name='jartype' value={description} onClick={RegisterJartype}></input>
                            </td>
                        </tr>
                        <tr>
                            <td> <label> Capacity in Liter : </label></td>
                            <td>
                                <input name='capacity' value={ccapacity} onClick={RegisterJarcapacity}></input>
                            </td>
                        </tr>
                        <tr>
                            <td> <label> Price in (Rs) : </label></td>
                            <td>
                                <input name='price' value={pprice} onClick={RegisterJarprice}></input>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <div align="center">
                        <button className='btn btn-dark' type="submit" style={{ color: "white" }}>Buy Now</button>&nbsp;&nbsp;&nbsp;
                        <button className='btn btn-dark' style={{ color: "white" }} onClick={handleBack}>Back</button>
                    </div>
                </div>
            </form>
            <br />
            <Footer></Footer>
        </div>
    )
}
