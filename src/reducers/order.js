const ordersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ORDER':
            return action.payload;
        case 'CREATE':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default ordersReducer;