const ADD_CART = 'ADD_CART';
const GET_CART = 'GET_CART';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const REMOVE_ITEM = 'REMOVE_ITEM';

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
        payload: {...product}
    }
}
export const getCart = () => {
    return {
        type: GET_CART
    }
}
export const increment = (id, flavour) => {
    return {
        type: INCREMENT,
        payload: {id, flavour}
    }
}
export const decrement = (id, flavour) => {
    return {
        type: DECREMENT,
        payload: {id, flavour}
    }
}
export const removeItem = (id, flavour) => {
    return {
        type: REMOVE_ITEM,
        payload: {id, flavour}
    }
}