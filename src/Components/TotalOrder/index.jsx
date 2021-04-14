import React from 'react';
import './totalOrder.css'
function TotalOrder(props) {
    const {cart} = props;
    return (
        <div className="total__order">
            <h2 className="">Tolal order</h2>
            <div className="total__container">
                {
                    cart.cartList.map((item, index) => {
                        return (
                        <div className="item" key={index}>
                            <div className="item-img">
                                <div className="thumbnail">
                                    <a href="#">
                                        <img src={`https://supplements-soa.herokuapp.com/${item.imgUrl[0]}`} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="item-detail">
                                <h3>{item.productName}</h3>
                                {/* <h3>x {item.qty}</h3> */}
                                <div className="quant">
                                    <button className="decre" onClick={() => props.decrement(item._id, item.options.flavour)}>-</button>
                                    <span>{item.options.quant}</span>
                                    {/* <button className="incre" onClick={() => dispatch(increment(item._id, item.options.flavour))}>+</button> */}
                                    <button className="incre" onClick={() => props.increment(item._id, item.options.flavour)}>+</button>
                                </div>
                                <h3>x {(item.price * item.options.quant).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}$</h3>
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
