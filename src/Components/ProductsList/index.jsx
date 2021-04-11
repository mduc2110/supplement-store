import React from 'react'
import ProductIem from './ProductItem';
import './productsList.css'
import HomeBanner from '../HomeBanner';
import {useSelector} from 'react-redux';
function ProductsList() {
    const prodsList = useSelector(state => state.productsReducer);
    console.log(prodsList);
    // const dispatch = useDispatch();
    
    // useEffect(() => {
    //     dispatch(getProducts());
    // }, []);
    return (
        <>
            <HomeBanner/>
            <div className="main__layout">
                
                <h2 className="title">NEW ARRIVALS</h2>
                <div className="products_list">
                    {prodsList.map((prod) => (<ProductIem item={prod}/>))}
                    
                </div>
                
            </div>
        </>
    )
}

export default ProductsList
