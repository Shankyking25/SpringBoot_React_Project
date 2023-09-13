import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService'
import SpecialOrdersServices from '../services/SpecialOrdersServices'
import Footer from './Footer'
import './ViewSpecialOrder.css'

class ViewSpecialOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            SpecialOrders: {}
        }
        this.handleBack = this.handleBack.bind(this)
    }

    componentDidMount() {
        SpecialOrdersServices.getSpecialOrdersById(this.state.id).then(res => {
            this.setState({ SpecialOrders: res.data });
        })
    }

    handleBack() {
        this.props.history.push("/CustomerSpecialOrder")
    }

    render() {
        return (
            <div class='back9' align="center"><br /><br />
                <div className="card col-md-4  back2" ><br /><br />
                    <h3 className="text-center" > Special Order Details</h3>
                    <div className="card-body" align="center">
                        <table id="viewSpecial" >
                            <tr class="sptr">
                                <td class="sptd">Customer Name : </td>
                                <td class="sptd">{this.state.SpecialOrders.cname}</td>
                            </tr>
                            <tr class="sptr back2">
                                <td class="sptd">Customer Address : </td>
                                <td class="sptd">{this.state.SpecialOrders.caddress}</td>
                            </tr>
                            <tr class="sptr">
                                <td class="sptd">Customer Email : </td>
                                <td class="sptd">{this.state.SpecialOrders.cemail}</td>
                            </tr>
                            <tr class="sptr back2">
                                <td class="sptd">Customer Mobile :  </td>
                                <td class="sptd">{this.state.SpecialOrders.cmobile}</td>
                            </tr>
                            <tr class="sptr">
                                <td class="sptd">Order Quantity :  </td>
                                <td class="sptd">{this.state.SpecialOrders.oqty}</td>
                            </tr>
                            <tr class="sptr back2">
                                <td class="sptd">Capacity in (Liters) :  </td>
                                <td class="sptd">{this.state.SpecialOrders.ocpty}</td>
                            </tr>
                            <tr class="sptr">
                                <td class="sptd">Order Type :   </td>
                                <td class="sptd">{this.state.SpecialOrders.otype}</td>
                            </tr>
                            <tr class="sptr back2">
                                <td class="sptd">Order Date :  </td>
                                <td class="sptd">{this.state.SpecialOrders.odate}</td>
                            </tr>
                        </table>
                    </div>
                    <div align="center">
                        <button className='btn btn-dark' style={{ color: "white" }} onClick={this.handleBack}>Back</button>
                    </div>
                </div><br /><br />
                <Footer></Footer>
            </div>
        )
    }
}

export default ViewSpecialOrder
