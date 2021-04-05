import React from 'react';
import './login.css';
function Login() {
    return (
        <div className="login">
            <h3 className="title">Sign in</h3>
            <form action="">
                <input type="text" placeholder="Id"/>
                <input type="password" placeholder="Password"/>
                <a className="link" href="/forgot">Forget your password?</a>
                <button className="btn btn__primary">Login</button>
                
            </form>
            <a className="link" href="/signup">Create account</a>
            <p></p>
            <div className="social__group">
                <a href=""><img src="https://www.flaticon.com/svg/vstatic/svg/1384/1384053.svg?token=exp=1616952807~hmac=b92b2ebb7dd9544ba56f0761f3c89319" alt=""/></a>
                <a href=""><img src="https://www.flaticon.com/svg/vstatic/svg/732/732200.svg?token=exp=1616952846~hmac=d4203cf02bca9f33b2eacaf8b64a80d7" alt=""/></a>
            </div>
            
        </div>
    )
}

export default Login
