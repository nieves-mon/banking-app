import React from "react"
import "./LatestTransactions.css"

const LatestTransactions = () => {
    return (
        <div className="latestTransactionContainer">
            <div className="title">LATEST TRANSACTIONS</div>
            <div className="latestTransactionDetailsContainer">
                <div className="details">Date</div>
                <div className="details">Type of Transaction</div>
                <div className="details">Name (if applicable)</div>
                <div className="details">Reference</div>
                <div className="details">Amount</div>   
            </div>
            <div className="latestTransactionDetailsContainer">
                <div className="detailsActual">Date</div>
                <div className="detailsActual">Type of Transaction</div>
                <div className="detailsActual">Name (if applicable)</div>
                <div className="detailsActual">Reference</div>
                <div className="detailsActual">Amount</div>   
            </div>
        </div>
    )
}

export default LatestTransactions