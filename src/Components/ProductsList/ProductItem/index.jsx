import React from 'react';
import {Link} from 'react-router-dom';

function ProductIem(props) {
    const {item} = props;
    return (
        <div className="product__item">
            <div className="thumbnail">
               <Link to={`/product/${item.id}`}>
                    {/* <img src={item.image} alt=""/> */}
                    <img src="https://images.unsplash.com/photo-1596177583101-26b7dada4f5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80" alt=""/>
                </Link>
                <a href="/ee" className="add"><img src="https://www.flaticon.com/svg/vstatic/svg/833/833314.svg?token=exp=1616659025~hmac=0eb61ea880f82dffab2acd59ec3032b6" alt=""/></a>
            </div>
            <div className="product__info">
                <h3>{item.title}</h3>
                <h4>{item.price}</h4>
            </div>
            
        </div>
    )
}

export default ProductIem
