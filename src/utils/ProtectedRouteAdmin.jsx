import React from 'react'
import { Redirect, Route } from 'react-router'
import {getRole } from './Common'

function ProtectedRouteAdmin({component: Component, ...rest}) {
    return (
        <Route exact {...rest}
            render={(props) => {
                return (
                    // <Component {...props}/>
                    getRole().roleName === 'MEMBER'?
                    <Redirect to={{pathname: "/", state: {from: props.location}}}/>
                    :<Component {...props}/>
                )
            }}
        />
    )
}

export default ProtectedRouteAdmin;
