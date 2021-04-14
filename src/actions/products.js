import axios from "axios"
import productApi from "../api/productApi";
import { getToken } from "../utils/Common";

const FETCH_PRODUCTS = 'FETCH_ALL';
const CREATE = 'CREATE';

export const getProducts = () => async (dispatch) => {
    try {
        const response = await productApi.getAll();
        dispatch({
            type: FETCH_PRODUCTS,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
    }
}
export const createProduct = (product) => async (dispatch) => {

    try {
        
        const response = await axios.post('https://supplements-soa.herokuapp.com/api/products', product,
        {
            headers: {
                'access-token': getToken()
            }
        })
        console.log(response);
        // const response = await productApi.add(product);
        dispatch({
            type: CREATE,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
    }
}