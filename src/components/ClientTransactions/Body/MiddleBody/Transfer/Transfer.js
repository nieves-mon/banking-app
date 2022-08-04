import React, { useState } from "react"

import {
    Link
  } from "react-router-dom";

import "./Transfer.css"

const Transfer = () => {
    const tempUser = {name:"B", email: "b@gmail.com", balance:10000}
    const [balance, setBalance] = useState(tempUser.balance)
    const [transfer, setTransfer] = useState(0)

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
        if ((balance - transfer) < 0) {
            return <p className="warning">You have not enough funds in your account</p>;
        }
        return <p>You have <span>&#8369;</span>{(balance - transfer).toLocaleString(undefined, {maximumFractionDigits:2})} available in your account</p>
    }

    return (    
        <div className="transactionContainer">
            <form className="deductTransfer" onSubmit={e => {handleSubmit(e)}}>
                <div className="inputTransfer">
                    <label htmlFor="transfer">You send exactly</label>
                        <input
                            required
                            id="transfer"
                            className="transferAmount"
                            name="transfer"
                            type="number"
                            value={transfer}
                            min="0"
                            onChange={e => setTransfer(e.target.value)}
                        />
                    <div className="statusText">{fundStatus(balance, transfer)}</div>
                </div>
                <Link className="submitButton" type="submit" to="/recipient">Continue</Link>         
            </form>
        </div>
    )
}

export default Transfer