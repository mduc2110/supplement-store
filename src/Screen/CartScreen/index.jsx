import React from 'react'
import { useSelector } from 'react-redux';
import './cartScreen.css';
import {increment, decrement} from '../../actions/cart';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

function CartScreen() {
    const cart = useSelector(state => state.cartReducer);
    console.log(cart);
    const dispatch = useDispatch();

    return (
        <div className="cart__screen">
            <h3 className="title">Your cart</h3>
            <div className="main__layout">
                <div className="cartList">
                {
                    cart.cartList.length !== 0?
                        cart.cartList.map(item => (
                            <div className="cart__item">
                                <div className="imgBox">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="prodDetail">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className="quant">
                                    <button className="decre" onClick={() => dispatch(decrement(item.id))}>-</button>
                                    {item.qty}
                                    <button className="incre" onClick={() => dispatch(increment(item.id))}>+</button>
                                    </div>
                                <h3 className="price">{item.price}</h3>
                                <h3 className="total">{(item.price * item.qty).toFixed(2)}</h3>
                                {/* <div className="prodDetail"></div> */}
                            </div>
                        ))
                        :(<div>
                            <p>No product in your cart</p>
                        </div>)
                }
                    
                </div>
                <div className="sumArea">
                    <h3 className="sum__title">ORDER SUMMARY</h3>
                    <div className="flex">
                        <p>Total</p>
                        <h3>{cart.totalOrder}</h3>
                    </div>
                    <button className="btn btn__dark">CHECK OUT</button>
                </div>
            </div>
            <div className="main__layout">
                <Link to="/">Continue shopping</Link>
            </div>
            
        </div>
    )
}

export default CartScreen;
