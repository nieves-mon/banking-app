import React, { useState } from "react"

import {
    Link
  } from "react-router-dom";

import "../Transactions/Transaction.css"

const Transfer = () => {
    const tempUser = {name:"B", email: "b@gmail.com", balance:10000}
    const [balance, setBalance] = useState(tempUser.balance)
    const [transfer, setTransfer] = useState(0)
    let transferError = false

    const deductTransfer = () => {
        tempUser.balance -= transfer
        setBalance(balance - parseInt(transfer))
        return;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        deductTransfer();
    }

    function fundStatus(balance, transfer) {
        if (transfer === 0) {
            transferError = true
            return <p className="warning">Type an amount to transfer</p>
        }
        if ((balance - transfer) < 0) {
            transferError = true
            return <p className="warning">You have not enough funds in your account</p>;
        }
        return <p>You have <span>&#8369;</span>{(balance - transfer).toLocaleString(undefined, {maximumFractionDigits:2})} available in your account</p>
    }

    return (    
        <div className="transactionContainer">
            <form className="transaction" onSubmit={e => {handleSubmit(e)}}>
                <div className="inputContainer">
                    <label htmlFor="transfer">Send exactly</label>
                        <input
                            required
                            id="transfer"
                            className="inputValue"
                            name="transfer"
                            type="number"
                            value={transfer}
                            min="0"
                            onChange={e => setTransfer(e.target.value)}
                        />
                    <div className="statusText">{fundStatus(balance, transfer)}</div>
                </div>       
                <Link className="submitButton" type="submit" to="/recipient"><button disabled={transferError} className="button">Continue</button></Link>         
            </form>
        </div>
    )
}

export default Transfer