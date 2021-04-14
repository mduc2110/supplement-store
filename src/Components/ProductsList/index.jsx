import React from 'react'
import ProductIem from './ProductItem';
import './productsList.css'
import HomeBanner from '../HomeBanner';
import {useSelector} from 'react-redux';
import Loader from '../Loader';
function ProductsList() {
    const prodsList = useSelector(state => state.productsReducer);
    return (
        <>
            <HomeBanner/>
            <div className="main__layout">
                
                <h2 className="title">NEW ARRIVALS</h2>
                {
                    prodsList.loading?
                    <div className="products_list">
                        {
                            
                            prodsList.products.map((prod, index) => (<ProductIem key={index} item={prod}/>))
                            
                        }
                    </div>
                    :<Loader/>
                }
                
            </div>
        </>
    )
}

export default ProductsList
