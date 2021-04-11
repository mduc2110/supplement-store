import React from 'react'
import './checkoutScreen.css';

import TotalOrder from '../../Components/TotalOrder';
import CheckoutForm from '../../Components/CheckoutForm';

function CheckoutScreen() {
    return (
        <div className="checkout__screen">
            <h1 className="title">Checkout</h1>
            <div className="main__layout">
                <CheckoutForm/>
                <TotalOrder/>
            </div>
        </div>
    )
}

export default CheckoutScreen
