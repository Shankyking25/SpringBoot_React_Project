import React from 'react'
import axios from "axios";
import './error.css';
import Footer from '../Footer';

export default class AdminForget extends React.Component {
    
    
/*    The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

        The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component). */



    
    constructor(props) {
        super(props)
        this.state = {

            cemail: '',
            cpassword: '',
            secretcode: ''
        }
        this.handleBack = this.handleBack.bind(this)
    }


    // Here, e is a synthetic event. React defines these synthetic events according to the W3C spec, 
    // so you don’t need to worry about cross-browser compatibility
    // OR
    // The e parameter of the function is an optional parameter of the input event handler which equals to 
    // a JavaScript Event object that contains information regarding what action or event just happened.

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {

        e.preventDefault()
        console.log(this.state)

        //Axios is an HTTP client library based on promises. 
        //It makes sending asynchronous HTTP requests to REST endpoints easier and helps you perform CRUD operations. 
        //This REST endpoint/API could be an external API like the Google API, GitHub API, and so on.
        // or it could be your own backend Node.

        axios.post('http://localhost:8181/api/v1/customer/UpdateCustomer', this.state).
            then((res) => {
                console.log(res)
                alert("Password Updated successfully !!")
                this.props.history.push("/CustomerLogin")
            })
            .catch(error => {
                console.log(error)
                alert("Wrong Credential !!")
                this.props.history.push("/CustomerForget")
            })
    }

    handleBack() {
        this.props.history.push("/CustomerLogin")
    }
    render() {

        const { cemail, cpassword, secretcode } = this.state

        return (
            <div class='back2'><br></br>
                <h3 align="center">Fill the details</h3><br />
                <form onSubmit={this.submitHandler} >
                    <div>
                        <table className='border border-dark' style={{ marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>

                            <tr>
                                <td><label for='email' >Email : </label></td>
                                <td><input
                                    type='text'
                                    name='cemail'
                                    value={cemail}
                                    onChange={this.changeHandler}
                                    placeholder="Enter Registered Email"
                                    required />
                                </td>
                            </tr>
                            <tr>
                                <td><label for='cpassword'>New Password : </label></td>
                                <td><input
                                    type='cpassword'
                                    name='cpassword'
                                    value={cpassword}
                                    onChange={this.changeHandler}
                                    placeholder="Enter New Password"
                                    required />
                                </td>
                            </tr>
                        </table>
                        <div align="center"><table ><br />
                            <tr>
                                <td><label for='secretcode'>Which Movie or TV Series you like the most ? : </label></td>
                                <td><input
                                    type='text'
                                    maxLength={20}
                                    name='secretcode'
                                    value={secretcode}
                                    onChange={this.changeHandler}
                                    required placeholder='Enter your secret code' />
                                </td>
                            </tr>

                        </table>
                        </div>
                        <br />
                        <div align="center">
                            <button className='btn btn-dark' type="submit" style={{ color: "white" }}>Submit</button>&nbsp;&nbsp;&nbsp;
                            <button className='btn btn-dark' style={{ color: "white" }} onClick={this.handleBack}>Go To Login</button>
                        </div>
                    </div>
                </form><br /><br />
                <Footer></Footer>
            </div>
        )
    }
}
