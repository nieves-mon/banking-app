import React from "react"
import "./TransactionDetails.css"
import { Routes, Route } from "react-router-dom";

import Recipient from "../Transfer/Recipient.js"
import TransferConfirmation from "../Transfer/TransferConfirmation.js"
import FinalTransfer from "../"
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
                <Routes>
                    <Route path="/recipient" element={<Recipient />}/>
                    <Route path="/transferConfirmation" element={<TransferConfirmation />}/>
                    <Route path="/finalTransfer" element={<FinalTransfer />}/>
                </Routes>
            </div>
            <div>
                <Routes>
                    <Route path="/latestTransactions" element={<LatestTransactions />}/>
                </Routes>
                <LatestTransactions />
            </div>
        </div>
    )
}

export default TransactionDetails
