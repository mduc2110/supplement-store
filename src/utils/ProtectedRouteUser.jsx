import React from 'react'
import { Redirect, Route } from 'react-router'
import { getToken } from './Common'

function ProtectedRouteUser({component: Component, ...rest}) {
    console.log(getToken());
    return (
        <Route {...rest}
            render={(props) => {
                return (
                    // <Component {...props}/>
                    getToken()? <Component {...props}/>
                    :<Redirect to={{pathname: "/login", state: {from: props.location}}}/>
                )
            }}
        />
    )
}

export default ProtectedRouteUser
