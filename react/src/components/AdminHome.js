import React, { useState } from "react";

import { Redirect } from "react-router";

/*  Redirect  =  Use to redirect the page to another page in ReactJS using react-router package.  
       Providing the to prop , passing the page you desire to redirect to.  ex 

       Syntax =

         import { Redirect } from 'react-router-dom';
             
          <Route path='/redirect-page' element={ <Redirect to="/error-page" /> }/>
*/


import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";





export default function AdminHome() {
  const [isAuth, setIsAuth] = useState(true)
  const [orderList, setOrderList] = useState(true)
  const [distributionList, setDistributionList] = useState(true)
  const [categoryList, setCategoryList] = useState(true)
  const [admin, setAdmin] = useState(true)
  const [logout, setLogout] = useState(true)

  if (!isAuth) {
    return <Redirect to='/Customer' />                             /* Redirect to Customer Page */
  }

  if (!orderList) {
    return <Redirect to='/RegularOrders' />                          /* Redirect to RegularOrders Page */
  }

  if (!distributionList) {
    return <Redirect to='/CustomerSpecialOrder' />
  }

  if (!categoryList) {
    return <Redirect to='/Category' />
  }

  if (!admin) {
    return <Redirect to='/Admin' />
  }

  if (!logout) {
    alert("Logged out...!")
    return <Redirect to='/' />
  }

  return (
    <div class='back8'>
      <div className='container-sm' align="center"><br />
        <ul style={{ listStyleType: "none" }} >
          <li className="list-group-item list-group-item-primary"><button
            className="btn"
            onClick={() => setIsAuth(false)}
          >Customer List</button>
          </li>
          <li className="list-group-item list-group-item-danger"><button
            className="btn"
            onClick={() => setOrderList(false)}
          >Regular Orders</button>
          </li>
          <li className="list-group-item list-group-item-success"><button
            className="btn"
            onClick={() => setDistributionList(false)}
          >Special Orders</button>
          </li>
          <li className="list-group-item list-group-item-primary"><button
            className="btn"
            onClick={() => setCategoryList(false)}
          >Jar Categories</button>
          </li>
          <li className="list-group-item list-group-item-danger"><button
            className="btn"
            onClick={() => setAdmin(false)}
          > Admin List</button>
          </li>
          <li className="list-group-item list-group-item-dark"><button
            className="btn"
            onClick={() => setLogout(false)}
          >Logout</button>
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </div>
  )
} 
