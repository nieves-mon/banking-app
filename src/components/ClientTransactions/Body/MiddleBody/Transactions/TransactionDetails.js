import React from "react"
import "./TransactionDetails.css"
import {
    Routes,
    Route
} from "react-router-dom";

import LatestTransactions from "../LatestTransactions/LatestTransactions.js"

const TransactionDetails = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div>
            <div className="dateContainer">
                <div className="dateLabel">DATE</div>
                <div className="dateActual">{date}</div>
            </div>
            <div className="balanceContainer">
                <div className="balanceLabel">BALANCE</div>
                <div className="balanceActual">123</div>
            </div>
            <div className="transactionDetails">

            </div>
            <div>
                <LatestTransactions />
            </div>
        </div>
    )
}

export default TransactionDetails
