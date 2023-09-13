import React ,{Component} from "react";
import SpecialOrdersServices from "../services/SpecialOrdersServices";
import Footer from "./Footer";

export default class CustomerSpecialOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            SpecialOrders:[],
            message:null
        }
        
        this.reloadSpecialOrdersList=this.reloadSpecialOrdersList.bind(this);
        this.handleBack=this.handleBack.bind(this)
        this.deleteSpecialOrder = this.deleteSpecialOrder.bind(this);
    }

    deleteSpecialOrder(id){
        SpecialOrdersServices.deleteSpecialOrder(id).then( res => {
            this.setState({SpecialOrders: this.state.SpecialOrders.filter(SpecialOrders => SpecialOrders.cid !== id)});
        });

    }

    viewSpecialOrders(id){
        this.props.history.push(`/ViewSpecialOrder/${id}`);
    }

    componentDidMount(){
       this.reloadSpecialOrdersList();
    }

    reloadSpecialOrdersList(){
        SpecialOrdersServices.getSpecialOrders().
        then((res)=>{
            this.setState({SpecialOrders:res.data})
            console.log(this.state.SpecialOrders)
        })
    }

    handleBack(){
        this.props.history.push("/AdminHome")
    }

    render(){
        return(
            <div class='back11'>
            <div className="form-group" align="center" ><br></br>
                <h3 align="center">Special Order List</h3><br></br>
                <div className="container-fluid">
                    <table className = "table-bordered">
                        <thead>
                            <tr>
                                <th>Customer id</th>
                                <th>Customer name</th>
                                <th>Customer address</th>
                                <th>Customer email</th>
                                <th>Customer mobile</th>
                                <th>Order Quantity</th>
                                <th>Capacity (in liters)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.SpecialOrders.map(
                                    SpecialOrders =>
                                    <tr key = {SpecialOrders.cid}>
                                        <td>{SpecialOrders.cid}</td>
                                        <td>{SpecialOrders.cname}</td>
                                        <td>{SpecialOrders.caddress}</td>
                                        <td>{SpecialOrders.cemail}</td>
                                        <td>{SpecialOrders.cmobile}</td>
                                        <td>{SpecialOrders.oqty}</td>
                                        <td>{SpecialOrders.ocpty}</td>
                                        <td> 
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewSpecialOrders(SpecialOrders.cid)} className="btn btn-info">View Details</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteSpecialOrder(SpecialOrders.cid)} className="btn btn-danger">Delete </button>
                                        </td> 
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>    
                </div><br></br>
                <div align="center">
                <button className="btn" style={{color:"black"}} onClick={this.handleBack}>Back</button>
                </div><br></br><br></br><br></br><br></br><br></br>
            </div>
            <Footer></Footer>
            </div>
        )      
    }
}
