const ADD_CART = 'ADD_CART';
const GET_CART = 'GET_CART';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// export const addCart = () => async (dispatch )=> {
//     alert("Clicked");
//     dispatch({
//         type: ADD_CART,
//         payload: "test string"
//     });
// }

export const addCart = (product) => {
    return {
        type: ADD_CART,
        payload: {...product[0], qty: 1}
    }
}

export const getCart = () => {
    return {
        type: GET_CART
    }
}

export const increment = (id) => {
    return {
        type: INCREMENT,
        payload: id
    }
}

export const decrement = (id) => {
    return {
        type: DECREMENT,
        payload: id
    }
}