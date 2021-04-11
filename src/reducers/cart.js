const initialState = {
    cartList: [],
    totalOrder: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART':
            const item = action.payload;
            const checkExist = state.cartList.find(ele => ele._id === item._id && ele.options.flavour === item.options.flavour);
            if(!checkExist) {
                const newCart = {
                    cartList: [...state.cartList, item],
                    totalOrder: [...state.cartList, item]
                    .reduce((acc, item) => acc + item.price*item.options.quant, 0)
                };
                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
            }
            else{
                alert("This product has already been in cart!");
                return state;
            }
        case 'GET_CART':
            if(localStorage.getItem("cart")){
                try {
                    const initCart = JSON.parse(localStorage.getItem("cart"));
                    return initCart;
                } catch (error) {
                    localStorage.removeItem("cart");
                }
            }
            return state;
        case 'INCREMENT':
            const updateIncre = state.cartList.map(ele =>{
                if(ele._id === action.payload.id
                    && ele.options.quant < ele.options.maxLength
                    && ele.options.flavour === action.payload.flavour){
                        ele.options.quant += 1;
                        return ele;
                }
                return ele;
                
            });
            const newListIncre = {
                cartList: updateIncre,
                totalOrder: updateIncre
                .reduce((acc, item) => acc+ item.price*item.options.quant, 0)
            };
            localStorage.setItem("cart", JSON.stringify(newListIncre));
            return newListIncre;
        case 'DECREMENT':
            const updateDecre = state.cartList.map(ele =>{
                if(ele._id === action.payload.id 
                    && ele.options.quant > 1 
                    && ele.options.flavour === action.payload.flavour){
                    ele.options.quant -= 1;
                    return ele;
                }
                return ele;
                
            });
            const newListDecre = {
                cartList: updateDecre,
                totalOrder: updateDecre
                .reduce((acc, item) => acc+ item.price*item.options.quant, 0)
            }
            localStorage.setItem("cart", JSON.stringify(newListDecre));
            return newListDecre;
        case 'REMOVE_ITEM':
            const {id, flavour} = action.payload;
            const updateRemoved = state.cartList.filter(item => item._id !== id || item.options.flavour !== flavour);
            const newListRemoved = {
                cartList: updateRemoved,
                totalOrder: updateRemoved
                .reduce((acc, item) => acc+ item.price*item.options.quant, 0)
            }
            localStorage.setItem("cart", JSON.stringify(newListRemoved));
            return newListRemoved;
        default:
            return state;
    }
}
export default cartReducer;