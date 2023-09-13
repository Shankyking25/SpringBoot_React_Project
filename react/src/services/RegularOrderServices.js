import { Component } from 'react'
import axios from "axios";
const URL = 'http://localhost:8181/api/v1/RegularOrder/getRegularorders';
const URL2 = 'http://localhost:8181/api/v1/RegularOrder/deleteRegularorders';

class RegularOrderServices extends Component {

    getOrder() {
        return axios.get(URL);

    }

    deleteOrder(id){
        return axios.delete(URL2 + '/' + id);
    }


}
export default new RegularOrderServices();
