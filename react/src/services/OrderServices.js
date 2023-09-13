import axios from "axios";


const URL='http://localhost:8181/api/v1/order/orders'
const URL2='http://localhost:8181/api/v1/order/deleteorders'


class OrderServices{
    
    getOrder(){
        return axios.get(URL);
 
    }
    deleteOrder(id){
        return axios.delete(URL2 + '/' + id);
    }
   
}

export default new OrderServices();