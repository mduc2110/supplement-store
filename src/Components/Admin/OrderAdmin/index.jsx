import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../actions/order';
import OrderModal from '../Modal/OrderModal';
import './orderAdmin.css';
function OrderAdmin() {
    const ordersState = useSelector(state => state.ordersReducer);
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(getOrders());
    },[])
    const filterStatus = (e) => {
        // console.log(e.target.value);
        // ordersState.orders
    }

    const [openModalOrder, setOpenModalOrder] = useState({
        status: false,
        type: "",
        item: []
    });
    return (
        <div className="order-admin box-color">
            <div className="flex">
                <p>Sort by</p>
                <select name="" id="" onChange={filterStatus}>
                    <option value="Pending">Pending</option>
                    <option value="Shipping">Shipping</option>
                    <option value="Done">Done</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordersState.orders?
                        ordersState.orders.map((item, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.to_name}</td>
                                <td>{item.phone}</td>
                                <td>{`${item.address}, ${item.ward.name},  ${item.district.name}, ${item.province.name}`}</td>
                                <td>{parseInt(item.total_amount).toLocaleString(undefined, {minimumFractionDigits:2})}$</td>
                                <td>{item.status}</td>
                                <td>
                                    <button className="btn btn__admin1"
                                        onClick={() => setOpenModalOrder({...openModalOrder, status: true, item: item})}
                                    >Edit</button>
                                    </td>
                            </tr>
                        ))
                        :<h3>No orders</h3>
                    }
                    
                </tbody>
            </table>
            <OrderModal
                isOpen={openModalOrder.status}
                closeModal={setOpenModalOrder}
                order={openModalOrder.item}
            />
            <h1>{openModalOrder.status}</h1>
        </div>
    )
}

export default OrderAdmin
