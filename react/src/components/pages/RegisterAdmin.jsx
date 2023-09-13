import axios from "axios";
import React from "react";
import Footer from "../Footer";

export default class RegisterAdmin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            aname: '',
            aemail: '',
            apassword: '',
            secretcode:''
        }
        this.handleBack = this.handleBack.bind(this)
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {

        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8181/api/v1/admin/saveAdmin', this.state).
            then((res) => {
                console.log(res)
                alert(" Registration successfull...!")
                this.props.history.push("/AdminLogin")
            })
            .catch(error => {
                console.log(error)
                alert("Aleredy register...!")
                this.props.history.push("/RegisterAdmin")
            })

    }

    handleBack() {
        this.props.history.push("/AdminLogin")
    }

    render() {

        const { aname, aemail, apassword,secretcode } = this.state

        return (
            <div class='back4'><br></br>
                <h3 align="center">Admin Registration</h3><br />
                <form onSubmit={this.submitHandler} >
                    <div>
                        <table className='border border-dark' style={{ marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
                            <tr>
                                <td><label for='aname' >Name : </label></td>
                                <td> <input
                                    type='text'
                                    name='aname'
                                    value={aname}
                                    onChange={this.changeHandler}
                                    placeholder="Enter your full name"
                                    required />
                                </td>
                            </tr>
                            <tr>
                                <td><label for='email' >Email : </label></td>
                                <td><input
                                    type='text'
                                    name='aemail'
                                    value={aemail}
                                    onChange={this.changeHandler}
                                    placeholder="Enter your email"
                                    required />
                                </td>
                            </tr>
                            <tr>
                                <td><label for='password'>Set Password : </label></td>
                                <td><input
                                    type='password'
                                    name='apassword'
                                    value={apassword}
                                    onChange={this.changeHandler}
                                    placeholder="Enter password"
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
                                    required placeholder='For Security Reasons' />
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
                </form><br/><br/>
                <Footer></Footer>
            </div>
        )
    }
}