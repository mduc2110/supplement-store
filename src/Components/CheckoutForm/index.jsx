import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getToken } from '../../utils/Common';
import Paypal from '../../utils/Paypal';
import './checkoutForm.css';
function CheckoutForm(props) {
    const {cart} = props;
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [ward, setWard] = useState([]);
    const [orderInfo, setOrderInfo] = useState({
        payment_method: "COD",
        note: "",
        to_name: "",
        phone: "",
        address: "",
        ward: { id: 0, name: ""},
        district: { id: 0,name: ""},
        province: { id: 0,name: ""}
    });
    console.log(cart);
    useEffect(async () => {
        const province =  await axios.get('http://localhost:3333/api/address/province');
        // const deliveryAddress = await axios.get('http://localhost:3333/api/delivery-address', {
        //     headers: {
        //         'access-token': getToken()
        //     }
        // });
        setProvince(province.data);
        // axios.all([province, deliveryAddress])
        // .then(axios.spread((...responses) => {
        //     // setProvince
        //     setProvince(responses[0].data);
        //     setDeliveryAddress(responses[1].data);
        //     console.log(responses[1].data);
        // }))
        // .catch(err => console.log(err));

    }, []);
    const changeProvince = async (e) => {
        const index = e.target.selectedIndex;
        const res = await axios.get('http://localhost:3333/api/address/district/'+e.target.value);
        setDistrict(res.data);
        setOrderInfo({
            ...orderInfo,
            province: {
                id: e.target.value,
                name: e.target[index].text
            }
        });
    }
    const changeDistrict = async (e) => {
        const index = e.target.selectedIndex;
        const res = await axios.get('http://localhost:3333/api/address/ward/'+e.target.value)
        setWard(res.data);
        setOrderInfo({
            ...orderInfo,
            district: {
                id: e.target.value,
                name: e.target[index].text
            }
        });
    }
    const changeWard = async (e) => {
        const index = e.target.selectedIndex;
        setOrderInfo({
            ...orderInfo,
            ward: {
                id: e.target.value,
                name: e.target[index].text
            }
        });
    }

    const transactionSuccess = async (data) => {
        try {
            const items = cart.cartList.map(item => {
                return {
                    imgUrl: item.imgUrl,
                    name: item.productName,
                    code: item._id,
                    quantity: item.options.quant,
                    price: item.price,
                    weight: item.weight,
                    options: item.options.flavour,
                    category: {
                        level1: item.categories.cateName
                    }
                }
            });
            const total_amount = cart.totalOrder;
            const postData = {
                ...orderInfo,
                items,
                total_amount
            }
            const response = await axios.post('http://localhost:3333/api/orders/', 
            postData, {
                headers: {
                    'access-token': getToken()
                }
            })
        } catch (error) {
            
        }
        
    }
    const transactionError = () => {}
    const transactionCanceled = () => {}
    return (
        <div className="checkout__form">
            <h3 className="checkoutTitle">Billing detail</h3>
            <form>
                <label htmlFor="">Full name *</label>
                <input type="text" value={orderInfo.to_name} onChange={(e) => setOrderInfo({...orderInfo, to_name: e.target.value})}/>
                <label htmlFor="">Number phone *</label>
                <input type="text" value={orderInfo.phone} onChange={(e) => setOrderInfo({...orderInfo, phone: e.target.value})}/>
                <label htmlFor="">Address *</label>
                <div className="flex address">
                    <select name="" id="" onChange={changeProvince}>
                    {
                        province.map((ele, index) => {
                            return (<option value={ele.ProvinceID} key={index}>{ele.ProvinceName}</option>)
                        })
                    }
                    </select>
                    <select name="" id="" onChange={changeDistrict}>
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
                        <select name="" id="" onChange={changeWard}>{
                            ward.map((ele, index) => {
                                return (<option value={ele.WardCode} key={index}>{ele.WardName}</option>)
                            })
                            
                        }
                        </select>
                        :null
                    }
                
                </div>
                <label htmlFor="">Detail address *</label>
                <input type="text" value={orderInfo.address} onChange={(e) => setOrderInfo({...orderInfo, address: e.target.value})}/>
                <label htmlFor="">Note</label>
                <input type="text" value={orderInfo.note} onChange={(e) => setOrderInfo({...orderInfo, note: e.target.value})}/>
                <h3 className="checkoutTitle">Payment method</h3>
                <div className="flex" style={{justifyContent: 'flex-start', width: '30%', alignItems: 'center'}}>
                    <input type="radio"
                    value='PAYPAL'
                    checked={orderInfo.payment_method === 'PAYPAL'}
                    onChange={(e) => setOrderInfo({...orderInfo, payment_method: e.target.value})}
                    />
                    <label htmlFor="">Paypal</label>
                    <input type="radio"
                    value='COD'
                    checked={orderInfo.payment_method === 'COD'}
                    onChange={(e) => setOrderInfo({...orderInfo, payment_method: e.target.value})}
                    />
                    <label htmlFor="">COD</label>
                </div>
            </form>
            <div className="btnGroup">
                {
                    orderInfo.payment_method === 'COD'
                    ?<button 
                    onClick={transactionSuccess}
                    className="btn btn__dark"
                    >Checkout</button>
                    :<Paypal
                    toPay={cart.totalOrder}
                    onSuccess={transactionSuccess}
                    transactionError={transactionError}
                    transactionCanceled={transactionCanceled}
                    />
                }
            </div>
           
        </div>
    )
}

export default CheckoutForm;
