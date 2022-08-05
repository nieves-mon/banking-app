import React, { useState } from "react"

import {
    Link
  } from "react-router-dom";

  import "../Transactions/Transaction.css"


const Withdraw = () => {
    const tempUser = {name:"B", email: "b@gmail.com", balance:10000}
    const [balance, setBalance] = useState(tempUser.balance)
    const [withdrawal, setWithdrawal] = useState(0)
    let withdrawError = false

    const deductWithdrawal = () => {
        tempUser.balance -= withdrawal
        setBalance(balance - parseInt(withdrawal))
        return;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        deductWithdrawal();
    }

    function fundStatus(balance, withdrawal) {
        if (withdrawal === 0) {
            withdrawError = true
            return <p className="warning">Type an amount to withdraw</p>
        }
        if ((balance - withdrawal) < 0) {
            withdrawError = true
            return <p className="warning">You have not enough funds in your account</p>;
        }
        return <p>You have <span>&#8369;</span>{(balance - withdrawal).toLocaleString(undefined, {maximumFractionDigits:2})} available in your account</p>
    }

    return (    
        <div className="transactionContainer">
            <form className="transaction" onSubmit={e => {handleSubmit(e)}}>
                <div className="inputContainer">
                    <label htmlFor="withdrawal">Withdraw exactly</label>
                        <input
                            required
                            id="withdrawal"
                            className="inputValue"
                            name="withdrawal"
                            type="number"
                            value={withdrawal}
                            min="0"
                            onChange={e => setWithdrawal(e.target.value)}
                        />
                    <div className="statusText">{fundStatus(balance, withdrawal)}</div>
                </div>       
                <Link className="submitButton" type="submit" to="/withdrawalConfirmation"><button disabled={withdrawError} className="button">Continue</button></Link>         
            </form>
        </div>
    )
}

export default Withdraw