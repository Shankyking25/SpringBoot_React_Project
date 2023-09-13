
import React, { Component } from "react";
import "../App.css"
import CustomerServices from "../services/CustomerServices";
import Footer from "./Footer";

class Customer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customers: [],
            message: null
        }

        this.reloadCustomerList = this.reloadCustomerList.bind(this);
        this.handleBack = this.handleBack.bind(this)
    }

    componentDidMount() {
        this.reloadCustomerList();
    }

    reloadCustomerList() {
        CustomerServices.getCoustmer().
            then((res) => {
                this.setState({ customers: res.data })
                console.log(this.state.customers)
            })
    }

    handleBack() {
        this.props.history.push("/AdminHome")
    }

    render() {
        return (
            <div class='back4'>
                <div className="form-group" align="center" ><br></br>
                    <h2 align="center">Customers List</h2><br />
                    <div className="container">
                        <table className="table-bordered">
                            <thead>
                                <tr>
                                    <th>Customer Id</th>
                                    <th>Customer Name</th>
                                    <th>Customer Address</th>
                                    <th>Customer Email</th>
                                    <th>Customer Mobile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer =>
                                            <tr key={customer.cid}>
                                                <td>{customer.cid}</td>
                                                <td>{customer.cname}</td>
                                                <td>{customer.caddress}</td>
                                                <td>{customer.cemail}</td>
                                                <td>{customer.cmobile}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div><br></br>
                    <div align="center">
                        <button className="btn" style={{ color: "black" }} onClick={this.handleBack}>Back</button>
                    </div><br></br>
                </div>
                <Footer></Footer>
            </div>

        )
    }
}

export default Customer;