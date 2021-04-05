import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './productDetail.css'
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import {addCart} from '../../actions/cart';


function ProductDetail(props) {
    const [loading, setLoading] = useState(true);
    const {prodId} = useParams();
    const [productDetail, setProductDetail] = useState([]);


    const prodsList = useSelector(state => state.productsReducer);
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    console.log({e: cart});
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${prodId}`)
            .then(res => {
                setProductDetail(res.data)
                setLoading(false)
                console.log(productDetail);
            })
            .catch(err => console.log(err));
    }, [])

    const handleAddToCart = (id) => {
        const item = prodsList.filter(ele => ele.id === id);
        // console.log(item);
        dispatch(addCart(item));
    }
    return (
        loading?
            <Loader/>
            :<div className="product__detail">
                <div className="main__layout">
                    <div className="imgArea">
                        <img src={productDetail.image} alt=""/>
                    </div>
                    <div className="detailArea">
                        <h2>{productDetail.title}</h2>
                        <span>{productDetail.price}</span>
                        <p>{productDetail.description}</p>
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
