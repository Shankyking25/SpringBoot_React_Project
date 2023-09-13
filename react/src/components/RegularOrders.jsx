import React, { Component } from "react";
import '../App.css';
import RegularOrderServices from "../services/RegularOrderServices";
import Footer from "./Footer";

class Order extends Component{
    constructor(props){
        super(props)

        this.state={
            RegularOrders:[],
            message:null
        }
        this.reloadOrderList=this.reloadOrderList.bind(this)
        this.handleBack=this.handleBack.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this);
    }
    deleteOrder(id){
        RegularOrderServices.deleteOrder(id).then( res => {
            this.setState({RegularOrders: this.state.RegularOrders.filter(RegularOrders => RegularOrders.oid !== id)});
        });

    }
    
    componentDidMount(){
        this.reloadOrderList();
    }

    reloadOrderList(){
        RegularOrderServices.getOrder().then((res)=>{
            this.setState({RegularOrders:res.data})
            console.log(this.state.RegularOrders)
        })
    }

    handleBack(){
        this.props.history.push("/AdminHome")
    }

    render(){
        return(
            <div class='back8'>
            <div className="form-group" align="center" ><br></br>
                <h3 align="center">Regular Orders List</h3><br></br>
                <div className="align-baseline">
                    <table className = "table-bordered">
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Customer Name</th>
                                <th>Mobile No</th>
                                <th>Customer Address</th>
                                <th>Jar type </th>
                                <th>Capacity In (Liters) </th>
                                <th>Order Date </th>
                                <th>Price In(Rs)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.RegularOrders.map(
                                    RegularOrders=>
                                    <tr key={RegularOrders.oid}>
                                        <td>{RegularOrders.oid}</td>
                                        <td>{RegularOrders.cname}</td>
                                        <td>{RegularOrders.cmobile}</td>
                                        <td>{RegularOrders.caddress}</td>
                                        <td>{RegularOrders.jartype}</td>
                                        <td>{RegularOrders.capacity}</td>
                                        <td>{RegularOrders.odate}</td>
                                        <td>{RegularOrders.price}</td>
     
                                        <td> <button style={{marginLeft: "10px"}} onClick={ () => this.deleteOrder(RegularOrders.oid)} className="btn btn-danger">Delete </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div><br></br>
                <button className="btn" style={{color:"black"}} onClick={this.handleBack}>Back</button>
                <br></br><br></br>
            </div>
            <Footer></Footer>
            </div>
            
        )
    }

}

export default Order;
