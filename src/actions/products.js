import axios from "axios"
import { getToken } from "../utils/Common";

const FETCH_PRODUCTS = 'FETCH_ALL';
const CREATE = 'CREATE';

export const getProducts = () => async (dispatch) => {
    try {
        axios.get('http://localhost:3333/api/products')
        .then(res => {
            dispatch({
                type: FETCH_PRODUCTS,
                payload: res.data
            });
        })
    } catch (error) {
        console.log(error);
    }
}
export const createProduct = (product) => async (dispatch) => {

    try {
        axios.post('http://localhost:3333/api/products', product, {
            headers: {
                'access-token': getToken()
            }
        })
        .then(res => {
            dispatch({
                type: CREATE,
                payload: res.data
            });
        })
    } catch (error) {
        console.log(error);
    }
}