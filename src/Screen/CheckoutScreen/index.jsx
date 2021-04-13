import React, { useEffect } from 'react'
import './checkoutScreen.css';

import TotalOrder from '../../Components/TotalOrder';
import CheckoutForm from '../../Components/CheckoutForm';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement, getCart} from '../../actions/cart';

function CheckoutScreen() {
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
    },[])
    const incre = (id, flavour) => {
        dispatch(increment(id, flavour));
    }
    const decre = (id, flavour) => {
        dispatch(decrement(id, flavour));
    }
    return (
        <div className="checkout__screen">
            <h1 className="title">Checkout</h1>
            <div className="main__layout">
                <CheckoutForm
                    cart={cart}/>
                <TotalOrder 
                    cart={cart} 
                    increment={incre} 
                    decrement={decre}/>
            </div>
        </div>
    )
}

export default CheckoutScreen
