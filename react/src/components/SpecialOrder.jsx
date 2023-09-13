import React, { Component } from 'react';
import axios from 'axios';
import Footer from './Footer';
export default class SignUp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cname: '',
      caddress: '',
      cemail: '',
      cmobile: '',
      oqty: '',
      otype: '',
      odate: '',
      ocpty:''
    }
    this.handleBack = this.handleBack.bind(this)
  }
  handleBack() {
    this.props.history.push("/CustomerHome")
  }

  myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    alert("succcessfully Registerd..!")
    //e.preventDefault()
    console.log(this.state);
    axios.post('http://localhost:8181/api/v1/orders/saveOrders', this.state).
      then((res) => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { cname, caddress, cemail, cmobile, oqty, otype, odate, ocpty } = this.state
    return (
      <div class='back11'> <br />
        <h2 align="center"> Fill The Details</h2><br />
        <form onSubmit={this.submitHandler}>
          <div>
            <table className='border border-dark' style={{ marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
              <tr>
                <td><label for='name' >Full Name : </label></td>
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
                  placeholder="Enter your address"
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
                  // type='number' 
                  type='text'

                  maxLength={10}
                  name='cmobile'
                  value={cmobile}
                  onChange={this.changeHandler}
                  placeholder="Enter your mobile"
                  required />
                </td>
              </tr>
              <tr>
                <td><label for='type' >Jar Type : </label></td>
                <td><input type='text' name='otype' value={otype} list="WaterType"  placeholder="Select Jar Type" onChange={this.changeHandler} />
                  <datalist id="WaterType">
                    <option value="Mineral Normal water" />
                    <option value="Mineral Cold water" />
                    <option value="Purified Normal water" />
                    <option value="Purified Cold water" />
                  </datalist>
                  </td>
              </tr>
              <tr>
                <td><label for='ocpty'>Capacity in (Ltrs) : </label></td>
                <td><input
                  type='text'
                  maxLength={20}
                  name='ocpty'
                  value={ocpty}
                  onChange={this.changeHandler}
                  placeholder="Enter Capacity"
                  required />
                </td>
              </tr>
              <tr>
                <td><label for='oqty'>Quantity : </label></td>
                <td><input
                  type='text'
                  maxLength={20}
                  name='oqty'
                  value={oqty}
                  onChange={this.changeHandler}
                  placeholder="Enter quantity required"
                  required />
                </td>
              </tr>
              <tr>
                <td><label for='odate'>Date : </label></td>
                <td><input
                  type='date'
                  name='odate'
                  value={odate}
                  onChange={this.changeHandler}
                  required />
                </td>
              </tr>
            </table>
            <br />
            <div align="center">
              <button className='btn btn-dark' type="submit" style={{ color: "white" }}>Submit</button>&nbsp;&nbsp;&nbsp;
              <button className='btn btn-dark' style={{ color: "white" }} onClick={this.handleBack}>Back</button>
            </div>
          </div>
        </form>
        <br />
        <Footer />
      </div>
    )
  }
}

