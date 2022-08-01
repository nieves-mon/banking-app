import React from "react"
import "./Transactions.css"
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import Deposit from "../Deposit/Deposit.js"

const Transactions = () => {
    return (
        <div>
            <Routes>
                <Route path="/deposit" element={<Deposit />}/>
            </Routes>
            <div>Latest Transactions</div>
            <div>Show All</div>
        </div>
    )
}

export default Transactions