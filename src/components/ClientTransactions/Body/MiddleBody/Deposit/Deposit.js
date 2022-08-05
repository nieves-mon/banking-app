import React, { useState } from "react"

import {
    Link
  } from "react-router-dom";

  import "../Transactions/Transaction.css"


const Deposit = () => {
    const tempUser = {name:"B", email: "b@gmail.com", balance:10000}
    const [balance, setBalance] = useState(tempUser.balance)
    const [deposit, setDeposit] = useState(0)
    let depositError = false

    const addDeposit = () => {
        tempUser.balance += deposit
        setBalance((balance) + parseInt(deposit))
        return;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addDeposit();
    }

    function fundStatus(balance, deposit) {
        if (deposit === 0) {
            depositError = true
            return <p className="warning">Type an amount to deposit</p>
        }
        return <p>You have <span>&#8369;</span>{(balance + deposit).toLocaleString(undefined, {maximumFractionDigits:2})} available in your account</p>
    }

    return (    
        <div className="transactionContainer">
            <form className="transaction" onSubmit={e => {handleSubmit(e)}}>
                <div className="inputContainer">
                    <label htmlFor="deposit">Deposit exactly</label>
                        <input
                            required
                            id="deposit"
                            className="inputValue"
                            name="deposit"
                            type="number"
                            value={deposit}
                            min="0"
                            onChange={e => setDeposit(e.target.value)}
                        />
                    <div className="statusText">{fundStatus(balance, deposit)}</div>
                </div>       
                <Link className="submitButton" type="submit" to="/depositConfirmation"><button disabled={depositError} className="button">Continue</button></Link>         
            </form>
        </div>
    )
}

export default Deposit