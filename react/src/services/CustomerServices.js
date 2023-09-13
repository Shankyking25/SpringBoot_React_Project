import axios from 'axios'


const URL='http://localhost:8181/api/v1/customer/customers';

class CustomerServices{

    getCoustmer(){
        return axios.get(URL)
    }

    postCustomer(){
        return axios.post()
    }
}

export default new CustomerServices();