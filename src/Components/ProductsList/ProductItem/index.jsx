import React from 'react';
import {Link} from 'react-router-dom';

function ProductIem(props) {
    const {item} = props;
    console.log(item);
    return (
        <div className="product__item">
            <div className="thumbnail">
               <Link to={`/product/${item.urlProduct}`}>
                    {/* <img src={item.image} alt=""/> */}
                    <img src={`http://localhost:3333/${item.imgUrl[0]}`} alt=""/>
                </Link>
                {/* <a href="/ee" className="add"><img src="https://www.flaticon.com/svg/vstatic/svg/833/833314.svg?token=exp=1616659025~hmac=0eb61ea880f82dffab2acd59ec3032b6" alt=""/></a> */}
            </div>
            <div className="product__info">
                <h3>{item.productName}</h3>
                <h4>{parseInt(item.price).toLocaleString('vi')}</h4>
            </div>
            
        </div>
    )
}

export default ProductIem
