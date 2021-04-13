import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../actions/order';
import './orderAdmin.css';
function OrderAdmin() {
    const orders = useSelector(state => state.ordersReducer);
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(getOrders());
    },[])
    console.log(orders);
    return (
        <div className="order-admin box-color">
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Img</th>
                        <th>Product Name</th>
                        <th>Import price</th>
                        <th>Price</th>
                        <th>Weight</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>No</td>
                        <td>Img</td>
                        <td>Product Name</td>
                        <td>Import price</td>
                        <td>Price</td>
                        <td>Weight</td>
                        <td>Action</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OrderAdmin
