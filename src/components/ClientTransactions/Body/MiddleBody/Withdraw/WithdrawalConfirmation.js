import React, { useState } from "react"

import {
    Link
  } from "react-router-dom";

import "../Transactions/TransactionConfirmation.css"


const WithdrawalConfirmation = () => {
    const [reference, setReference] = useState("")

    return (
        <div>
            <div className="transactionDetailsContainer">
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Withdrawal details</div>
                    <Link to="/withdraw"><div className="transactionDetailActual">Edit</div></Link>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Withdraw exactly</div>
                    <div className="transactionDetailActual">123</div>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Balance afterwards</div>
                    <div className="transactionDetailActual">123</div>
                </div>
            </div>
            <div className="transactionDetailsContainer">
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Reference (optional)</div>
                    <div className="transactionDetailActual">
                        <input
                            required
                            id="transferReference"
                            className="transactionReference"
                            name="reference"
                            type="text"
                            value={reference}
                            onChange={e => setReference(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <Link className="submitButton" type="submit" to="/finalWithdrawal"><button className="button">Confirm and send</button></Link>
        </div>        
    )
}

export default WithdrawalConfirmation