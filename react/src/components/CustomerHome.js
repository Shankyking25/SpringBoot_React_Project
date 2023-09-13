import React,{useState} from "react"
import { Redirect } from 'react-router-dom';
import '../App.css'
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CustomerHome(){
    const [categoryList,setCategoryList]=useState(true)
    const [order,setOrder]=useState(true)
    const [logout,setLogout]=useState(true)

    if(!categoryList){
        return <Redirect to='/CustomerJarCateg' />
    }

    if(!order){
        return <Redirect to='/SpecialOrder' />
    }

    if(!logout){
        alert("logged out")
        return <Redirect to='/' />
    }

    return(
        <div class="back8">
        <div className='container-sm ' align="center" ><br/>
            <ul style={{listStyleType:"none"}} >
                <li className="list-group-item list-group-item-success"><button
                    className="btn"
                    onClick={()=>setCategoryList(false)}
                    >Regular Order</button>
                </li>
                <li className="list-group-item list-group-item-danger"><button 
                    className="btn"
                    onClick={()=>setOrder(false)}
                    >Special Order</button></li>
                <li className="list-group-item list-group-item-dark"><button 
                    className="btn"
                    onClick={()=>setLogout(false)}
                    >Logout</button>
                </li>
            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div> 
        <Footer></Footer>
        </div>
    )
}