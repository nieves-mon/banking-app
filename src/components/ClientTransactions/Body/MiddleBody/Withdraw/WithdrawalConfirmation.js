import React, { useState } from "react"
import { Link } from "react-router-dom";
import "../Transactions/TransactionConfirmation.css"


const WithdrawalConfirmation = ({currUser, withdraw, balance, updateBalance}) => {
    const [reference, setReference] = useState("")

    const handleConfirm = (e) => {
        updateBalance(currUser, "Withdraw", parseFloat(withdraw));
    }

    return (
        <div>
            <div className="transactionDetailsContainer">
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Withdrawal details</div>
                    <Link to="/withdraw"><div className="transactionDetailActual">Edit</div></Link>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Withdraw exactly</div>
                    <div className="transactionDetailActual">{withdraw}</div>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Balance afterwards</div>
                    <div className="transactionDetailActual">{parseFloat(balance) + parseFloat(withdraw)}</div>
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
            <Link className="submitButton" type="submit" to="../finalWithdrawal">
                <button className="button" onClick={e => handleConfirm(e)}>Confirm and send</button>
            </Link>
        </div>
    )
}

export default WithdrawalConfirmation
