import React from 'react'
import './dashboard.css'
function Dashboard() {
    return (
        <div className="dashboard">
            <div className="flex">
                <div className="box-color display-total">
                    <h1 className="title_w">0</h1>
                    <p>Total order</p>
                </div>
                <div className="box-color display-total">
                    <h1 className="title_w">0</h1>
                    <p>Total order</p>
                </div>
                <div className="box-color display-total">
                    <h1 className="title_w">0</h1>
                    <p>Total order</p>
                </div>
                <div className="box-color display-total">
                    <h1 className="title_w">0</h1>
                    <p>Total order</p>
                </div>

            </div>
            <div className="flex">
                <div className="box-color transaction-history">
                    <h1 className="title_w">Transaction history</h1>
                </div>
                <div className="box-color">
                </div>

            </div>
        </div>
    )
}

export default Dashboard
