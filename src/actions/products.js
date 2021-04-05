import axios from "axios"

const FETCH_PRODUCTS = 'FETCH_ALL';
const CREATE = 'CREATE';

export const getProducts = () => async (dispatch) => {
    try {
        axios.get('https://fakestoreapi.com/products')
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
        axios.post('https://localhost:3333/api/products', product)
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