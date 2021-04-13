import axios from "axios";
import { getToken } from "../utils/Common";

const GET_ORDER = 'GET_ORDER';
const UPDATE_ORDER = 'UPDATE_ORDER';

export const getOrders = () => async (dispatch) => {
    try {
        axios.get('http://localhost:3333/api/orders',{
            headers: {
                'access-token': getToken()
            }
        })
        .then(res => {
            dispatch({
                type: GET_ORDER,
                payload: res.data
            });
        })
    } catch (error) {
        console.log(error);
    }
}