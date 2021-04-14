import React from 'react'
import { useParams } from 'react-router';
import './orderItem.css';
function OrderItem(props) {
    const {status} = useParams();
    const {stt, item} = props;
    return (
        <div className="orderItem">
            {
                item.items.map(element => (
                    <div className="flex item">
                        <div className="thumbnail">
                            <img src={`https://supplements-soa.herokuapp.com/${element.imgUrl[0]}`} alt=""/>
                        </div>
                        <div className="detail">
                            <h3>{element.name}</h3>
                            <div className="flex">
                                <i>Quant: {element.quantity}</i>
                                <i>Price: {element.price}$</i>
                                <i>Total price: {element.price * element.quantity}$</i>
                            </div>
                            <i>Options: {element.options}</i>
                        </div>
                    </div>
                ))
            }
            
           
            <div className="flex sum">
                <div className="deliveryInfo">
                    <p>Delivery address: <i>{item.address}</i></p>
                    <p>Payment method: <i>{item.payment_method}</i></p>
                    <h3>Total: {parseInt(item.total_amount).toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2})}$</h3>
                </div>
                <div className="btn-group">
                    <button className="btn btn__dark">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default OrderItem;
