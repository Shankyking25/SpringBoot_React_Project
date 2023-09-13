import axios from "axios";
import { Component } from "react";

const URL='http://localhost:8181/api/v1/category/categories'
const URL2='http://localhost:8181/api/v1/category/deleteCategory'
const URL3='http://localhost:8181/api/v1/category/RegularOrdersById'

class CategoryServices extends Component{

    getCategory(){
        return axios.get(URL);
    }

    deleteCategory(id){
        return axios.delete(URL2 + '/' + id);
    }
    getRegularOrdersById(id){
        return axios.get(URL3 + '/' + id);
    }

}

export default new CategoryServices();