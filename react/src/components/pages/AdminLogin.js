import React from 'react'
import mystore from '../store';
import './error.css';
import Footer from '../Footer';
import './Water.css';

export default class Services extends React.Component {



  /*    The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.
  
          The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component). */



  constructor(props) {
    super(props);
    this.state = {
      admin: "",
    }
    this.handleBack = this.handleBack.bind(this)
  }

  handleBack() {
    this.props.history.push("/RegisterAdmin")
  }

  checkLogin = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;

    if (username === '' || password.length === 0) {
      document.getElementById("err2").innerHTML = "username or passward should not be empty!";

    } else if (password !== '' && username !== '') {
      document.getElementById("err2").innerHTML = "";
      // (Send url to SpringBoot code and then atlast MySQL)
      const url = "http://localhost:8181/checkLogin?username=" + username + "&password=" + password;
      fetch(url)
        .then(response => response.text())
        .then(data => {
          if (data.length > 0) {
            mystore.dispatch({ type: 'LOGGEDIN' })
            if (data === "admin") {
              this.setState({ admin: data })
              this.props.history.push("/AdminHome");
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
      <div class="back2">
        <br />
        <div>
          <h3 align="center">Admin Login</h3><br />
        </div>
        <form>
          <div>
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
            <div align="center">                                                                                {/*  create multiple blank spaces */}
              <input className='btn btn-dark' type="button" value="LOGIN" id="button" onClick={this.checkLogin} />&nbsp;&nbsp;&nbsp;
              <button className='btn btn-dark' style={{ color: "white" }} onClick={this.handleBack}>Sign Up</button>
            </div><br />
            <div align="center">
              <a href="http://localhost:3000/AdminForget" className="text-decoration-none">Forgot password ?</a>
            </div>
          </div>
        </form><br /><br /><br /><br /><br /><br />
        <Footer></Footer>
      </div>
    );
  }
}
