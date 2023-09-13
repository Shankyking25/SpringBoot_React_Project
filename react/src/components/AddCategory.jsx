import axios from "axios";
import React, { Component } from "react";
import Footer from './Footer';

export default class AddCategory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            description: "",
            capacity: "",
            price: ""
        }

        this.handleBack = this.handleBack.bind(this)
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        alert("Added successfully...!")
        console.log(this.state)

        axios.post('http://localhost:8181/api/v1/category/saveCategory', this.state).
            then((res) => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleBack() {
        this.props.history.push("/Category")
    }

    render() {

        const { description, capacity, price } = this.state

        return (
            <div className='form-group back11' align="center"><br></br>
                <h3>Add New Category</h3><br></br>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <table className="border border-dark" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
                            <tr>
                                <td><label for='type' >Jar Type : </label></td>
                                <td><input type='text' name='description' value={description} list="WaterType" placeholder="Select Jar Category " onChange={this.changeHandler} />
                                    <datalist id="WaterType">
                                        <option value="Mineral Normal water" />
                                        <option value="Mineral Cold water" />
                                        <option value="Purified Normal water" />
                                        <option value="Purified Cold water" />
                                    </datalist>
                                    </td>
                            </tr>
                            <tr>
                                <td><label for='capacity' >Capacity in (Ltrs): </label></td>
                                <td> <input
                                    type='text'
                                    name='capacity'
                                    value={capacity}
                                    onChange={this.changeHandler}
                                    placeholder="Enter Capacity" required />
                                </td>
                            </tr>
                            <tr>
                                <td><label for='price' >Price in (Rs) : </label></td>
                                <td><input
                                    type='text'
                                    name='price'
                                    value={price}
                                    onChange={this.changeHandler} 
                                    placeholder="Set Price" required />
                                </td>
                            </tr>
                        </table><br></br>
                        <button className="btn" style={{ color: "black" }} type="submit">Submit</button>
                    </div>
                </form>
                <button className="btn" style={{ color: "black" }} onClick={this.handleBack}>Back</button><br></br>
                <Footer></Footer>
            </div>
        )
    }
}