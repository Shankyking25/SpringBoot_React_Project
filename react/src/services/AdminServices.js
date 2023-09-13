import React from "react";
import axios from "axios";

const URL = "http://localhost:8181/api/v1/admin/admins"


/* This page use in Admin.jsx */

class AdminServices extends React.Component {

    getAdmin() {
        return axios.get(URL)
    }
}

export default new AdminServices();