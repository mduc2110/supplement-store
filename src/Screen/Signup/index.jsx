import React, { useState } from 'react'
import './signup.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Signup() {
    const [dateVal, setDateVal] = useState(new Date());
    return (
        <div className="signup">
            <h3 className="title">Sign up</h3>
            <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <input type="email" placeholder="Email"/>
                <DatePicker 
                selected={dateVal} 
                onChange={date => setDateVal(date)} />
                <button className="btn btn__primary">Sign up</button>
                
            </form>
            <a className="link" href="/signup">Create account</a>
            <p></p>
        </div>
    )
}

export default Signup
