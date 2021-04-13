import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import Order from '../../Components/UserInfo/Order';
import { getToken } from '../../utils/Common';
import './userInfoScreen.css';
function UserInfoScreen() {
    const { path, url } = useRouteMatch();
    const [ordersList, setOrdersList] = useState([]);
    useEffect( async () => {
        try {
            const response = await axios.get('http://localhost:3333/api/orders/orders', {
                headers: {
                    'access-token': getToken()
                }
            });
            setOrdersList(response.data);
        } catch (error) {
            
        }
    }, []);
    return (
        <div className="userInfo">
            <div className="title">User information</div>
            <div className="main__layout">
                <div className="left">
                <ul className="nav">
                    <li><NavLink to={`${url}/Pending`}>Pending</NavLink></li>
                    <li><NavLink to={`${url}/Shipping`}>Shipping</NavLink></li>
                    <li><NavLink to={`${url}/Done`}> Done</NavLink></li>
                    <li><NavLink to={`${url}/cancel`}>Cancel</NavLink></li>
                </ul>
                <Switch>
                    <Route exact path={`${path}/:status`}
                        render={(props) => (
                            <Order {...props} list={ordersList}/>
                        )}
                    />
                </Switch>
                </div>
                <div className="right">
                    s
                </div>
            </div>

        </div>
    )
}

export default UserInfoScreen;
