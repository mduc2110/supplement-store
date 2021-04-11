import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement, getCart} from '../../actions/cart';
import './totalOrder.css'
function TotalOrder() {
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
    },[])
    return (
        <div className="total__order">
            <h2 className="">Tolal order</h2>
            <div className="total__container">
                {
                    cart.cartList.map((item, index) => {
                        return (
                        <div className="item">
                            <div className="item-img">
                                <div className="thumbnail">
                                    <a href="#">
                                        <img src={`http://localhost:3333/${item.imgUrl[0]}`} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="item-detail">
                                <h3>{item.productName}</h3>
                                {/* <h3>x {item.qty}</h3> */}
                                <div className="quant">
                                    <button className="decre" onClick={() => dispatch(decrement(item._id, item.options.flavour))}>-</button>
                                    <span>{item.options.quant}</span>
                                    <button className="incre" onClick={() => dispatch(increment(item._id, item.options.flavour))}>+</button>
                                </div>
                                <h3>x {item.price * item.options.quant}</h3>
                            </div>
                        </div>
                    )})
                }
                {/* <button className="btn btn__dark">CHECK OUT</button> */}
                
            </div>
        </div>
    )
}

export default TotalOrder
