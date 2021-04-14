import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import './cartScreen.css';
import {increment, decrement, getCart, removeItem } from '../../actions/cart';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
function CartScreen() {
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart()) 
    }, []);
    return (
        <div className="cart__screen">
            <h3 className="title">Your cart</h3>
            <div className="main__layout">
                <div className="cartList">
                {
                    cart.cartList.length !== 0?
                        cart.cartList.map((item, index) => (
                            <div className="cart__item" key={index}>
                                <h3 className="odn__num"><span>{index+1}</span></h3>
                                <div className="imgBox">
                                    <img src={`https://supplements-soa.herokuapp.com/${item.imgUrl[0]}`} alt=""/>
                                </div>
                                <div className="prodDetail">
                                    <h3>{item.productName}</h3>
                                    {/* <p>{item.description}</p> */}
                                    <p>{item.options.flavour}</p>
                                </div>
                                <div className="quant">
                                    <button className="decre" onClick={() => dispatch(decrement(item._id, item.options.flavour))}>-</button>
                                    <span>{item.options.quant}</span>
                                    <button className="incre" onClick={() => dispatch(increment(item._id, item.options.flavour))}>+</button>
                                    </div>
                                <h3 className="price">{(item.price).toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2})}$</h3>
                                <h3 className="total">{(item.price * item.options.quant).toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2})}$</h3>
                                <a href="#"
                                    className="img__icon"
                                    onClick={() => dispatch(removeItem(item._id, item.options.flavour))}>
                                    <img src="/remove.svg" alt=""/>
                                    </a>
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
                        <h3>{(cart.totalOrder).toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2})}$</h3>
                    </div>
                    <Link className="btn btn__dark" to="/checkout">CHECK OUT</Link>
                </div>
            </div>
            <div className="main__layout">
                <Link to="/">Continue shopping</Link>
            </div>
            
        </div>
    )
}

export default CartScreen;
