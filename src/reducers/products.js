const inititalState = {
    products: [],
    loading: false
}
const productsReducer = (state = inititalState, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return {
                products: action.payload,
                loading: !state.loading
            };
        case 'CREATE':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default productsReducer;