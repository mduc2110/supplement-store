import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './productDetail.css'
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import {addCart} from '../../actions/cart';
import productApi from '../../api/productApi';

function ProductDetail(props) {
    const [loading, setLoading] = useState(true);
    const {prodId} = useParams();
    const [productDetail, setProductDetail] = useState([]);

    const prodsList = useSelector(state => state.productsReducer);
    const cart = useSelector(state => state.cartReducer);

    const [selectedOption, setSelectedOption] = useState({
        flavour: "",
        quant: 1,
        maxLength: 0
    })
    const dispatch = useDispatch();
    useEffect(async () => {
        try {
            const response = await productApi.get(prodId);
            setProductDetail(response.data)
            setLoading(false)    
        } catch (error) {
            setLoading(false)
            alert('cannot get product');
        }
        
    }, [])

    const handleAddToCart = (id) => {
        if(selectedOption.flavour == "") alert("Select a option")
        else{
            const option = {
                flavour: selectedOption.flavour,
                quant: selectedOption.quant
            }
            // setProductDetail({
            //     ...productDetail,
            //     options: option
            // })
            const ff = {
                ...productDetail,
                options: option
            }
            // const item = prodsList.filter(ele => ele.id === id);
            dispatch(addCart({
                ...productDetail,
                options: selectedOption
            }));
        }
        
    }
    const increQuant = () => {
        if(selectedOption.quant < selectedOption.maxLength){
            setSelectedOption({
                ...selectedOption,
                quant: selectedOption.quant + 1
            })
        }
        if(selectedOption.flavour == "") alert("Select a option")
    }
    const decreQuant = () => {
        if(selectedOption.quant > 1){
            setSelectedOption({
                ...selectedOption,
                quant: selectedOption.quant - 1
            })
        }
        if(selectedOption.flavour == "") alert("Select a option")
    }
    const handleSelectOption = (flavour, quant) => {
        setSelectedOption({
            ...selectedOption,
            flavour,
            maxLength: quant,
            quant: 1
        });
    }
    return (
        loading?
            <Loader/>
            :<div className="product__detail">
                <div className="main__layout">
                    <div className="imgArea">
                        <img src={`https://supplements-soa.herokuapp.com/${productDetail.imgUrl[0]}`} alt=""/>
                    </div>
                    <div className="detailArea">
                        <h2>{productDetail.productName}</h2>
                        {
                            productDetail.discount == 0
                            ?(
                                <span className="price">{parseInt(productDetail.price).toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2})}$</span>
                            ):
                            <>
                                <span className="oldPrice">{parseInt(productDetail.price).toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2})}$</span>
                                <span className="price">{(parseInt(productDetail.price) - parseInt(productDetail.price)*parseInt(productDetail.discount)/100).toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2})}$</span>
                            </>
                        }
                        {/* <span>{parseInt(productDetail.price).toLocaleString("vi")}</span> */}
                        <p>{productDetail.description}</p>
                        <div className="flex justi-left">
                            <div className="quant">
                                <button className="decre" onClick={decreQuant}>-</button>
                                <span>{selectedOption.quant}</span>
                                <button className="incre" onClick={increQuant}>+</button>
                            </div>
                            <span style={{marginLeft: "1.2em"}}>
                                {
                                    selectedOption.flavour==""?null
                                    :<>
                                        <span>{selectedOption.flavour}  </span>
                                        <i>({selectedOption.maxLength} products left)</i>
                                    </>
                                }
                                </span>
                        </div>
                        <div className="optionsArea">
                            {
                                productDetail.options.map((ele, index) => (
                                    <button key={index} className="btn__option" onClick={() => handleSelectOption(ele.flavour, ele.quant)}>{ele.flavour}</button>
                                ))
                            }
                        </div>
                        <div className="btn__group">
                            <button className="btn btn__dark" onClick={() => handleAddToCart(productDetail.id)}>Add to cart</button>
                            <button className="btn btn__light">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductDetail
