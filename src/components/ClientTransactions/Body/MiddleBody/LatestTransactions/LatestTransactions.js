import React from "react"
import "./LatestTransactions.css"

const LatestTransactions = () => {
    return (
        <div className="latestTransactionsContainer">
            <div className="title">LATEST TRANSACTIONS</div>
            <div>
                <div>Type of Transaction</div>
                <div>Name (if applicable)</div>
                <div>Amount</div>
            </div>
        </div>
    )
}

export default LatestTransactions
