import orderApi from "../api/orderApi";

const GET_ORDER = 'GET_ORDER';
const UPDATE_ORDER = 'UPDATE_ORDER';

export const getOrders = () => async (dispatch) => {
    try {
        const response = await orderApi.getAll();
        dispatch({
            type: GET_ORDER,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
    }
}

export const udpateOrder = (data) => async (dispatch) => {
    try {
        const response = await orderApi.createShipping(data);
        dispatch({
            type: UPDATE_ORDER,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
    }
}