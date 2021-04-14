import productsReducer from './products';
import {combineReducers} from 'redux';
import cartReducer from './cart';
import ordersReducer from './order';

const allReducers = combineReducers({
    productsReducer,
    cartReducer,
    ordersReducer
});
export default allReducers;