import React from 'react'
import Dashboard from '../../Components/Admin/Dashboard'
import ProductAdmin from '../../Components/Admin/ProductAdmin'
import Sidebar from '../../Components/Admin/Sidebar'
import HeaderAdmin from '../../Components/Admin/HeaderAdmin'
import {Switch, Route, useRouteMatch, NavLink} from 'react-router-dom';
import './admin.css'
import OrderAdmin from '../../Components/Admin/OrderAdmin'
function Admin() {
    const { path, url } = useRouteMatch();
    return (
        <>
        <div className="adminPage">
            <Sidebar/>
            <div className="body-wrapper">
                <HeaderAdmin/>
                <div className="main-panel">
                    <Switch>
                        <Route exact path={`${path}/dashboard`} component={Dashboard}/>
                        <Route exact path={`${path}/product`} component={ProductAdmin}/>
                        <Route exact path={`${path}/order`} component={OrderAdmin}/>
                        <Route exact path={`${path}/topics`}/>
                    </Switch>
                </div>
            </div>
        </div>
        </>
    )
}

export default Admin
