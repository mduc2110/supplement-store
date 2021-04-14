import React, { useEffect, useState } from 'react'
import './header.css';
import {Link} from 'react-router-dom';
import { getToken, removeToken } from '../../utils/Common';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../actions/cart';
function Header(props) {
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const handleLogout = () => {
        removeToken();
        window.location.href = "/";
    }
    useEffect(() => {
        dispatch(getCart());
    },[])
    return (
        <div className="header">
            <div className="main__layout">
                <Link to="/">SHOP</Link>
                <nav className="nav__center">
                    <Link to="/">Homepage</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/Cart" className="cart">Cart <span className="cartCount">{cart.cartList.length}</span></Link>
                </nav>

                {
                    getToken()?
                    <nav className="nav__action">
                        <Link to="/info/Pending" className="loginBtn">User</Link>
                        <a className="loginBtn" onClick={handleLogout}>Logout</a>
                    </nav>
                    :<nav className="nav__action">
                        <Link to="/login" className="loginBtn">Sign in</Link>
                        <Link to="/sign-up"  className="registBtn">Sign up</Link>
                    </nav>
                }
                {/* <nav className="nav__action">
                    <Link to="/login" className="loginBtn">Sign in</Link>
                    <Link to="/register"  className="registBtn">Sign up</Link>
                </nav> */}
            </div>
            
        </div>
        
    )
}

export default Header
