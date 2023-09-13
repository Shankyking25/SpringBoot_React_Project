
import React from 'react'
import AdminServices from '../services/AdminServices';    /* This will come from react folder develop by me AdminServices.js */
import Footer from "./Footer";

class Admin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            admin: []
        }
        this.relaodAdminList = this.relaodAdminList.bind(this)
        this.handleBack = this.handleBack.bind(this)
    }

    componentDidMount() {
        this.relaodAdminList();
    }

    relaodAdminList() {                         /* call Methord from Server/AdminServices.js page where getAdmin() methord is avilable  */
        AdminServices.getAdmin().then((res) => {
            this.setState({ admin: res.data })
            console.log(this.state.admin)
        })
    }

    handleBack() {
        this.props.history.push("/AdminHome")
    }

    render() {
        return (
            <div className="form-group back8" align="center"><br></br>
                <h3 align="center">Admin List</h3><br></br>
                <div className="container">
                    <table className="table-bordered">
                        <thead>
                            <tr>
                                <th>Admin id</th>
                                <th>Admin Name</th>
                                <th>Admin email</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.admin.map(
                                    admin =>
                                        <tr key={admin.aid}>
                                            <td>{admin.aid}</td>
                                            <td>{admin.aname}</td>
                                            <td>{admin.aemail}</td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div><br></br>
                <button className="btn" style={{ color: "black" }} onClick={this.handleBack}>Back</button>
                <br></br><br></br><br></br>
                <Footer></Footer>
            </div>
        );
    }

}

export default Admin;