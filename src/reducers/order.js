const initialState = {
    orders: [],
    loading: false
}
const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ORDER':
            return {
                orders: action.payload,
                loading: !state.loading
            };
        case 'CREATE':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default ordersReducer;