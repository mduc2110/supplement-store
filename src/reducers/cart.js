const initialState = {
    cartList: [],
    totalOrder: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART':
            const item = action.payload;
            const checkExist = state.cartList.find(ele => ele.id === item.id);
            console.log(checkExist);
            if(!checkExist) {
                return {
                    cartList: [...state.cartList, action.payload],
                    totalOrder: [...state.cartList, action.payload]
                    .reduce((acc, item) => acc+ item.price*item.qty, 0)
                };
            }
            else{
                alert("This product has already been in cart!");
                return state;
            }
        case 'GET_CART':
            return action.payload;
        case 'INCREMENT':
            const newListIncreased = state.cartList.map(ele =>{
                if(ele.id === action.payload){
                    ele.qty += 1;
                    return ele;
                }
                return ele;
                
            });
            return {
                cartList: newListIncreased,
                totalOrder: newListIncreased
                .reduce((acc, item) => acc+ item.price*item.qty, 0)
            };
        case 'DECREMENT':
            // console.log(action.payload);
            const newListDecreased = state.cartList.map(ele =>{
                if(ele.id === action.payload && ele.qty > 1){
                    ele.qty -= 1;
                    console.log(ele.qty);
                    return ele;
                }
                return ele;
                
            });
            return {
                cartList: newListDecreased,
                totalOrder: newListDecreased
                .reduce((acc, item) => acc+ item.price*item.qty, 0)
            };
        default:
            return state;
    }
}
export default cartReducer;