import axios from 'axios'
import React from 'react'
import orderApi from '../../../../api/orderApi';
import { getToken } from '../../../../utils/Common';
import './orderModal.css'
function OrderModal(props) {
    const {order} = props;
    const handleSendShippingOrder = async () => {
        try {
            
            const postData = {
                _id: order._id,
                note: order.note,
                to_name: order.to_name,
                to_phone: order.phone,
                to_address: order.address,
                to_ward_code: order.ward.id,
                to_district_id: order.district.id,
                cod_amount: order.payment_method==='COD'?order.total_amount:0,
                items: order.items
            }
            const response =await orderApi.createShipping(postData);
            // const response = await axios.post('http://localhost:3333/api/orders/order-create',
            // postData, {
            //     headers: {
            //         'access-token': getToken()
            //     }
            // });
            console.log(response.data);
            alert('success');
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        props.isOpen?
        <>
            <div className="overlay" onClick={() => props.closeModal(false)}></div>
            <div className="edit-order box-color">
                <h3 className="title cap">Order info</h3>
                <p className="order-info"><b className="cap">Name:</b> {order.to_name}</p>
                <p className="order-info"><b className="cap">Phone:</b> {order.phone}</p>
                <p className="order-info"><b className="cap">Address:</b> {`${order.address}, ${order.ward.name},  ${order.district.name}, ${order.province.name}`}</p>
                <p className="order-info"><b className="cap">Status:</b> {order.status}</p>
                <p className="order-info"><b className="cap">Payment method:</b> {order.payment_method}</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Option</th>
                            <th>Quant</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.items?
                            order.items.map((item, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td className="imgCell">
                                        <img src={`https://supplements-soa.herokuapp.com/${item.imgUrl[0]}`} alt=""/>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.options}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price.toLocaleString(undefined, {minimumFractionDigits: 2})}$</td>
                                </tr>
                            )):null
                        }
                        
                    </tbody>
                </table>
                <div className="flex">
                    <h3 className="cap">Total: {(order.total_amount).toLocaleString(undefined, {minimumFractionDigits:2})}$</h3>
                    <button className="btn btn__admin1" onClick={handleSendShippingOrder}>Create</button>
                    <button className="btn btn__admin2" onClick={handleSendShippingOrder}>Cancel order</button>
                    <button className="btn btn__admin2" onClick={() => props.closeModal(false)}>X</button>
                </div>
            </div>
        </>
        :null
    )
}

export default OrderModal;
