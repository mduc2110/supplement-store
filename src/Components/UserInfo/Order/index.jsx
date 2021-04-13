import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './order.css'
import OrderItem from './OrderItem'
import {getToken} from '../../../utils/Common'
import { useParams } from 'react-router'
function Order(props) {
    const {status} = useParams();
    const [filteredList, setFilteredList] = useState([]);
    useEffect(() => {
        setFilteredList(props.list.filter(item => item.status === status));
    }, [])
    console.log(props.list.filter(item => item.status === status));
    return (
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
