import productsReducer from './products';
import {combineReducers} from 'redux';
import cartReducer from './cart';

const allReducers = combineReducers({
    productsReducer,
    cartReducer
});
export default allReducers;