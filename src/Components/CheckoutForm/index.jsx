import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getToken } from '../../utils/Common';
import './checkoutForm.css';
function CheckoutForm() {
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [ward, setWard] = useState([]);
    const [deliveryAddress, setDeliveryAddress] = useState({});

    const [selectedP, setSelectedP] = useState();
    console.log(selectedP);
    const [orderInfo, setOrderInfo] = useState({
        payment_type_id: 0,
        note: "",
        to_name: "",
        to_phone: "",
        to_address: "",
        to_ward_code: 0,
        to_district_id: 0,
        cod_amount: 0,

        weight: 0,
        length: 0,
        width: 0,
        height: 0,
        service_id: 0,
        service_type_id: 0,
        pick_shift: [2],
        items: []
    });
    useEffect(async () => {
        const province =  await axios.get('http://localhost:3333/api/address/province');
        const deliveryAddress = await axios.get('http://localhost:3333/api/delivery-address', {
            headers: {
                'access-token': getToken()
            }
        });
        axios.all([province, deliveryAddress])
        .then(axios.spread((...responses) => {
            // setProvince
            setProvince(responses[0].data);
            setDeliveryAddress(responses[1].data);
            console.log(responses[1].data);
            if(deliveryAddress.length > 0){
                console.log("hihi");
            }else{
                console.log("huhuhuhu");
            }
            setSelectedP(202);
        }))
        .catch(err => console.log(err));

    }, []);
    const getDistrict = (e) => {
        axios.get('http://localhost:3333/api/address/district/'+e.target.value)
        .then(res => setDistrict(res.data))
        .catch(err => console.log(err));
        setSelectedP(e.target.value);
    }
    const getWard = (e) => {
        axios.get('http://localhost:3333/api/address/ward/'+e.target.value)
        .then(res => setWard(res.data))
        .catch(err => console.log(err));
    }
    return (
        <div className="checkout__form">
            <form>
                <label htmlFor="">Họ và tên</label>
                <input type="text" value={orderInfo.to_name} onChange={(e) => setOrderInfo({...orderInfo, to_name: e.target.value})}/>
                <label htmlFor="">Số điện thoại</label>
                <input type="text" value={orderInfo.to_phone} onChange={(e) => setOrderInfo({...orderInfo, to_phone: e.target.value})}/>
                <label htmlFor="">Địa chỉ</label>
                <div className="flex address">
                    <select name="" id="" onChange={getDistrict} value={selectedP}>
                    {
                        province.map((ele, index) => {
                            return (<option value={ele.ProvinceID} key={index}>{ele.ProvinceName}</option>)
                        })
                    }
                    </select>
                    <select name="" id="" onChange={getWard}>
                    {
                        district?
                        district.map((ele, index) => {
                            return (<option value={ele.DistrictID} key={index}>{ele.DistrictName}</option>)
                        })
                        :null
                    }
                    </select>
                    {
                        ward?
                        <select name="" id="">{
                            ward.map((ele, index) => {
                                return (<option value={ele.WardID} key={index}>{ele.WardName}</option>)
                            })
                            
                        }
                        </select>
                        :null
                    }
                
                </div>
                <label htmlFor="">Địa chỉ chi tiết</label>
                <input type="text" value={orderInfo.to_address} onChange={(e) => setOrderInfo({...orderInfo, to_address: e.target.value})}/>
            </form>
        </div>
    )
}

export default CheckoutForm
