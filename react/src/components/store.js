import reducer from "./reducer";
import { createStore } from "redux";
const initialSt = {loggedin: false};
const mystore = createStore (reducer, initialSt)
export default mystore;