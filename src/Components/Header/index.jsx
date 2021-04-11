import React from 'react'
import './header.css';
import {Link} from 'react-router-dom';
import { getToken, removeToken } from '../../utils/Common';

function Header(props) {
    const handleLogout = () => {
        removeToken();
        window.location.href = "/";
    }
    return (
        <div className="header">
            <div className="main__layout">
                <Link to="/">SHOP</Link>
                <nav className="nav__center">
                    <Link to="/">Homepage</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/about">About</Link>
                    <Link to="/about">Blog</Link>
                    <Link to="/Cart">Cart</Link>
                </nav>

                {
                    getToken()?
                    <nav className="nav__action">
                        <a className="loginBtn" onClick={handleLogout}>Logout</a>
                    </nav>
                    :<nav className="nav__action">
                        <Link to="/login" className="loginBtn">Sign in</Link>
                        <Link to="/register"  className="registBtn">Sign up</Link>
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
