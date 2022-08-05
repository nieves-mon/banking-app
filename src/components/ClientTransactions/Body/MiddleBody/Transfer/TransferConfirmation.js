import React, { useState } from "react"

import {
    Link
  } from "react-router-dom";

import "../Transactions/TransactionConfirmation.css"


const TransferConfirmation = () => {
    const [reference, setReference] = useState("")

    return (
        <div>
            <div className="transactionDetailsContainer">
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Transfer details</div>
                    <Link to="/transfer"><div className="transactionDetailActual">Edit</div></Link>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">You send exactly</div>
                    <div className="transactionDetailActual">123</div>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">You get</div>
                    <div className="transactionDetailActual">123</div>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Balance afterwards</div>
                    <div className="transactionDetailActual">123</div>
                </div>
            </div>
            <div className="transactionDetailsContainer">
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Recipient details</div>
                    <Link to="/recipient"><div className="transactionDetailActual">Change</div></Link>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Name</div>
                    <div className="transactionDetailActual">A</div>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Email</div>
                    <div className="transactionDetailActual">a@gmail.com</div>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Account number</div>
                    <div className="transactionDetailActual">1234</div>
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
            <Link className="submitButton" type="submit" to="/finalTransfer"><button className="button">Confirm and send</button></Link>
        </div>        
    )
}

export default TransferConfirmation