import axios from "axios";

const URL='http://localhost:8181/api/v1/orders/getAllorders'
const URL2='http://localhost:8181/api/v1/orders/deleteSpecialOrders'
const URL3='http://localhost:8181/api/v1/orders/ViewSpecialOrdersById'

 class SpecialOrdersServices  {
  

    getSpecialOrders(){

        return axios.get(URL);
 
    }

    deleteSpecialOrder(id){
        return axios.delete(URL2 + '/' + id);
    }

    getSpecialOrdersById(id){
        return axios.get(URL3 + '/' + id);
    }
}

export default new SpecialOrdersServices();