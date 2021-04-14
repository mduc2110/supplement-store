
import React, { useEffect, useState } from 'react'
import './order.css'
import OrderItem from './OrderItem'
import { useParams } from 'react-router'
import Loader from '../../Loader'
function Order(props) {
    const {status} = useParams();
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        setFilteredList(props.list.filter(item => item.status === status));
    }, [])
    return (
        props.loading?<Loader/>
        :
        <div className="order">
            {
                props.list.filter(item => item.status === status)
                .map((item, index) => <OrderItem item={item} key={index} stt={status}/>)
                // :null
            }
        </div>
    )
}

export default Order
