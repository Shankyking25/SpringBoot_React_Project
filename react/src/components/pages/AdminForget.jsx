import React from 'react'


/*    Axios =  Axios, which is a popular library is mainly
 used to send asynchronous HTTP requests to REST endpoints. This library is very useful
  to perform CRUD (Create, Read, Update, and Delete) operations.This popular library is used to communicate with the backend. 
  Axios supports the Promise API, */

import axios from "axios";
import './error.css';
import Footer from '../Footer';




export default class AdminForget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            aemail: '',
            apassword: '',
            secretcode: ''
        }
        this.handleBack = this.handleBack.bind(this)
    }
    /* this.setState({ [e.target.name]: e.target.value })  =   when you input some thing in input tag it will call onChange all value like Email, Password and Question will set in e.target.name  */
    changeHandler = (e) => {                                   /* e(event) = It is Synthatic event or we can say an object or parameter and it has target inside it. It will help to write or change the text in input box  */
        this.setState({ [e.target.name]: e.target.value })                 /* e.target.value =  it will help to write in text box if do not use it then we can not wite in side input box */
    }

    submitHandler = (e) => {
        /* preventDefault() = If you click on submit button it reload the page if you want to stop the refreshing of page you use this preventDefault() so it will directily do it or it will stop the refreshing of page  */
        e.preventDefault()                   /* preventDefault() = Used to Force Fully ignore the default behaviour of the tag to use  Ex= in Anchar tag if you do not want to use href link and vyou want to add onclick so that you use PreventDefault to ignore href and use onclick  <a href="" onClick={}*/
        console.log(this.state)

        //Axios is an HTTP client library based on promises. 
        //It makes sending asynchronous HTTP requests to REST endpoints easier and helps you perform CRUD operations. 
        //This REST endpoint/API could be an external API like the Google API, GitHub API, and so on.
        // or it could be your own backend Node.

        axios.post('http://localhost:8181/api/v1/admin/UpdateAdmin', this.state).     /*  this.state = All the value come in side it id ,password ,etc  */
            then((res) => {
                console.log(res)
                alert(" Password  successfully updated")
                this.props.history.push("/AdminLogin")
            })
            .catch(error => {
                console.log(error)
                alert("Wrong Credential...!")
                this.props.history.push("/AdminForget")
            })
    }

    handleBack() {
        this.props.history.push("/AdminLogin")   /* history = method adds an entry to the browser's session history stack. */
    }


    /*
    When render method is called React?
    Generally, it gets called by React at various app stages when the React component instantiates for the first time, or when there is a new update to the component stateWhen render method is called React?
    Generally, it gets called by React at various app stages when the React component instantiates for the first time, or when there is a new update to the component state
    
             OR
    
     The purpose of the function is to display the specified HTML code inside the specified HTML element. In the render() method, we can read props and state and return our JSX code to the root component of our app.        
    
    
    
    */


    render() {

        const { aemail, apassword, secretcode } = this.state

        return (
            <div class='back10'><br></br>
                <h3 align="center">Fill the details</h3><br />
                <form onSubmit={this.submitHandler} >
                    <div>
                        <table className='border border-dark' style={{ marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>

                            <tr>
                                <td><label for='email' >Email : </label></td>
                                <td><input
                                    type='text'
                                    name='aemail'
                                    value={aemail}
                                    onChange={this.changeHandler}                     /* onChange = Any change in input tag field */
                                    placeholder="Enter Registered Email"
                                    required />
                                </td>
                            </tr>
                            <tr>
                                <td><label for='apassword'>New Password : </label></td>
                                <td><input
                                    type='apassword'
                                    name='apassword'
                                    value={apassword}
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
