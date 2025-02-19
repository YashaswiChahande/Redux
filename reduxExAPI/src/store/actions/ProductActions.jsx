import axios from "axios"
import { getproducts } from "../reducers/ProductReducer";


export const asyncgetproducts = () => async(dispatch, getState) => {
    console.log(getState)
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // here we have data of products which is sync data
 
        dispatch(getproducts(response.data));
    } catch (error) {
        console.log(error);
    }
}