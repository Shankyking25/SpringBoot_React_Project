import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLogin from './components/pages/AdminLogin';
import CustomerLogin from './components/pages/CustomerLogin';
import RegisterCustomer from './components/pages/RegisterCustomer';
import AdminHome from './components/AdminHome';
import Customer from './components/Customer';
import RegularOrders from './components/RegularOrders';
import CustomerHome from './components/CustomerHome';
import Category from './components/Category';
import RegisterAdmin from './components/pages/RegisterAdmin';
import PaymentPage from './components/PaymentPage';
import SpecialOrder from './components/SpecialOrder';
import Admin from './components/Admin';
import Transaction from './components/Transaction';
import AddCategory from './components/AddCategory';
import About from './components/About';
import CustomerSpecialOrder from './components/CustomerSpecialOrder';
import ViewSpecialOrder from './components/ViewSpecialOrder';
import AdminForget from './components/pages/AdminForget';
import CustomerForget from './components/pages/CustomerForget'
import CustomerOrder from './components/CustomerOrder';
import CustomerJarCateg from './components/CustomerJarCateg';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AdminLogin' component={AdminLogin}/>
          <Route path='/CustomerLogin' component={CustomerLogin}/>
          <Route path='/RegisterCustomer' component={RegisterCustomer} />
          <Route path='/RegisterAdmin' component={RegisterAdmin} />
          <Route path='/AdminHome' component={AdminHome} />
          <Route path='/Customer' component={Customer} />
          <Route path='/CustomerHome' component={CustomerHome} />
          <Route path='/RegularOrders' component={RegularOrders} />
          <Route path='/Category' component={Category} />
          <Route path='/SpecialOrder' component={SpecialOrder}/>
          <Route path='/Admin' component={Admin} />
          <Route path='/Transaction' component={Transaction}/>
          <Route path='/AddCategory' component={AddCategory}/>
          <Route path="/About" component={About}/>
          <Route path='/PaymentPage' component={PaymentPage}/>
          <Route path='/CustomerSpecialOrder' component={CustomerSpecialOrder}/>
          <Route path='/ViewSpecialOrder/:id' component={ViewSpecialOrder}/>
          <Route path='/AdminForget' component={AdminForget}/>
          <Route path='/CustomerForget' component={CustomerForget}/>
          <Route path='/CustomerOrder/:description/:ccapacity/:pprice' component={CustomerOrder}/>
          <Route path='/CustomerJarCateg' component={CustomerJarCateg}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
