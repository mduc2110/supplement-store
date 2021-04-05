import React from 'react'
import './sidebar.css'
import {Link, NavLink} from 'react-router-dom'

import {Switch, Route, useRouteMatch} from 'react-router-dom';
function Sidebar() {
    const { path, url } = useRouteMatch();

    return (
        <div className="sidebar">
            <h1 style={{color: "#fff", padding: ".5em"}}><Link to={`${path}`}>WHEY</Link></h1>
            <ul className="nav">
                <li><NavLink to={`${url}/dashboard`}>Dashboard </NavLink></li>
                <li><NavLink to={`${url}/product`}>Product</NavLink></li>
                <li><NavLink to={`${url}/account`}>Account</NavLink></li>
                <li><NavLink to={`${url}/something`}>HEHHEE</NavLink></li>
            </ul>
        </div>
    )
}

export default Sidebar
