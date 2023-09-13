import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import Footer from '../Footer';
export default class SignUp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cname: '',
      caddress: '',
      cemail: '',
      cmobile: '',
      cpassword: '',
      secretcode: ''
    }
    this.handleBack = this.handleBack.bind(this)
  }
  handleBack() {
    this.props.history.push("/CustomerLogin")
  }

  myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {

    e.preventDefault()
    console.log(this.state);
    axios.post('http://localhost:8181/api/v1/customer/saveCustomer', this.state).
      then((res) => {
        console.log(res)
        alert(" Registration successfull...!")
        this.props.history.push("/CustomerLogin")
      })
      .catch(error => {
        console.log(error)
        alert("Aleredy register...!")
        this.props.history.push("/RegisterCustomer")
      })
  }

  render() {
    const { cname, caddress, cemail, cmobile, cpassword, secretcode } = this.state
    return (
      <div class='back10'><br></br>
        <h3 align="center">Customer Registration</h3><br />
        <form onSubmit={this.submitHandler}>
          <div>
            <table className='border border-dark' style={{ marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
              <tr>
                <td><label for='name' >Name : </label></td>
                <td> <input
                  type='text'
                  name='cname'
                  value={cname}
                  onChange={this.changeHandler}
                  placeholder="Enter your full name"
                  required />
                </td>
              </tr>
              <tr>
                <td><label for='adress' >Address : </label></td>
                <td> <input
                  type='text'
                  name='caddress'
                  value={caddress}
                  onChange={this.changeHandler}
                  placeholder="Enter your Address"
                  required />
                </td>
              </tr>
              <tr>
                <td><label for='email' >Email : </label></td>
                <td><input
                  type='email'
                  name='cemail'
                  value={cemail}
                  onChange={this.changeHandler}
                  placeholder="Enter your email"
                  required />
                </td>
              </tr>
              <tr>
                <td><label for='mobile no'>Mobile No: </label></td>
                <td> <input
                  type='text'
                  minLength={10}
                  maxLength={12}
                  name='cmobile'
                  value={cmobile}
                  onChange={this.changeHandler}
                  placeholder="Enter Mobile Number"
                  required />
                </td>
              </tr>
              <tr>
                <td><label for='password'>Set Password : </label></td>
                <td><input
                  type='password'
                  maxLength={20}
                  name='cpassword'
                  value={cpassword}
                  onChange={this.changeHandler}
                  placeholder="Enter password"
                  required />
                </td>
              </tr>

            </table><br />
            <div align="center"><table >
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
        </form>
        <br />
        <Footer />
      </div>
    )
  }
}

