import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router'
import { getToken, getRole } from './Common'

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
