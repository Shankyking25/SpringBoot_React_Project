import React from 'react'
import Footer from '../Footer';
import mystore from '../store';
import './error.css';


export default class Services extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      customer: "",
    }
    this.handleBack = this.handleBack.bind(this)
  }

  handleBack() {
    this.props.history.push('/RegisterCustomer')
  }

  checkLogin = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if (username === '' || password.length === 0) {
      document.getElementById("err2").innerHTML = "username or passward should not be empty!";

    } else if (password !== '' && username !== '') {
      document.getElementById("err2").innerHTML = "";
      const url = "http://localhost:8181/checkLogincustomer?username=" + username + "&password=" + password;

      fetch(url)
        .then(response => response.text())
        .then(data => {
          if (data.length > 0) {
            mystore.dispatch({ type: 'LOGGEDIN' })
            if (data === "customer") {
              this.setState({ customer: data })
              this.props.history.push("/CustomerHome");
            }
          }
          else {
            alert("Wrong username or password");
            this.setState({ loginerror: "Wrong Username/Password" })
          }
        });
    }
  }
  render() {
    return (
      <div class="back11">
        <br />
        <div>
          <h3 align="center">Customer Login</h3><br />
        </div>
        <form>
          <div class="col-md-16" >
            <table className='border border-dark' style={{ marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
              <tr>
                <td><label>Username : </label></td>
                <td><input type='text' name='username' ref="username" placeholder="Enter Registered Email" required /></td>
              </tr>
              <tr>
                <td><label>Password : </label></td>
                <td><input type="password" name="password" ref="password" placeholder="Enter your password" required /></td>
              </tr>
            </table>
            <div align="center"><p id='err2'></p></div>

            <div align="center">
              <input className='btn btn-dark' type="button" value="LOGIN" id="button" onClick={this.checkLogin} />&nbsp;&nbsp;&nbsp;
              <button className='btn btn-dark' style={{ color: "white" }} onClick={this.handleBack}>Sign Up</button>
            </div><br />
            <div align="center">
              {/* Forget Password = On Click it go to CustomerForget.jsx  Component */}
              <a href="http://localhost:3000/CustomerForget" className="text-decoration-none">Forgot password ?</a>
            </div>
          </div>
        </form><br /><br /><br /><br /><br /><br />
        <Footer></Footer>
      </div>
    );
  }
}
