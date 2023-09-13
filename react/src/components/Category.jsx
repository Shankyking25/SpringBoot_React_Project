import React, { Component} from "react";
import CategoryServices from "../services/CategoryServices";     /* This will come from react folder develop by me CategoryServices.js */
import '../App.css'
import Footer from './Footer';


export default class Category extends Component {


/*    The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

        The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component). */

    constructor(props) {
        super(props)

        this.state = {
            category: [],
            message: null
        }
        this.reloadCatgeoryList = this.reloadCatgeoryList.bind(this)
        this.handleBack = this.handleBack.bind(this)
        this.addCategory = this.addCategory.bind(this)
        this.deleteCategory = this.deleteCategory.bind(this);
    }

    deleteCategory(id){                                                
        CategoryServices.deleteCategory(id).then( res => {                              /*  call Methord from Server/CategoryServices.js page where deleteCategory() methord is avilable   */        
            this.setState({category: this.state.category.filter(category => category.cgid !== id)});
        });

    }


/*  The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered. */
/*  The render() method is required and will always be called */
    componentDidMount() {
        this.reloadCatgeoryList();
    }

    reloadCatgeoryList() {                                 
        CategoryServices.getCategory().then((res) => {                          /*  call Methord from Server/CategoryServices.js page where getCategory() methord is avilable   */   
            this.setState({ category: res.data })
            console.log(this.state.category)
        })
    }

    handleBack() {
        this.props.history.push("/AdminHome")
    }

    addCategory() {
        this.props.history.push("/AddCategory")
    }


    render() {
        return (
            <div className="form-group back2 " align="center"><br></br>
                <h3 align="center">Category List</h3><br></br>
                <div className="align-baseline">
                    <table className="table-bordered">
                        <thead>
                            <tr>
                                <th>Category id</th>
                                <th>Capacity in Ltrs</th>
                                <th>Description</th>
                                <th>Price (Rs)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.category.map(
                                    category =>
                                        <tr key={category.cgid}>
                                            <td>{category.cgid}</td>
                                            <td>{category.capacity}</td>
                                            <td>{category.description}</td>
                                            <td>{category.price}</td>
                                            <td> <button style={{ marginLeft: "10px" }} onClick={() => this.deleteCategory(category.cgid)} className="btn btn-danger">Delete </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div><br></br>
                <button className="btn" style={{ color: "black" }} onClick={this.addCategory}>Add New Category</button>
                <button className="btn" style={{ color: "black" }} onClick={this.handleBack}>Back</button>
                <br></br><br></br><br></br>
                <Footer></Footer>
            </div>
        )
    }
}