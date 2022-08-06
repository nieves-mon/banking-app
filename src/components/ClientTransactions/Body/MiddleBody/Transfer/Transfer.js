import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import "../Transactions/Transaction.css"

const Transfer = ({amount, setAmount, balance, setPage}) => {
    let transferError = false;

    const handleSubmit = (e) => {
        e.preventDefault();

        // let idx;
        // for(let i = 0; i < filteredUsers.length; i++) {
        //     if(filteredUsers[i].name.toLowerCase() === otherUser.toLowerCase().trim()) {
        //         idx = i;
        //         break;
        //     }
        // }

        // if(idx === -1) {
        //     console.log("fail");
        //     return;
        // }

        // console.log(idx);
        // updateBalance(currUser, "transfer", parseFloat(transfer), "Transfer To", users[idx]);
    }

    function fundStatus(balance, amount) {
        if (amount.length < 1) {
            transferError = true
            return <p className="warning">Type an amount to transfer</p>
        }
        if ((balance - amount) < 0) {
            transferError = true
            return <p className="warning">Not enough funds in your account</p>;
        }
        return <p>New balance after transfer will be: <span>&#8369;</span>{(balance - amount).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
    }

    useEffect(() => {
        setAmount("");
        setPage("transfer");
    }, [setPage]);

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
                            value={amount}
                            min="0.0"
                            step="any"
                            onChange={e => setAmount(e.target.value)}
                        />
                    <div className="statusText">{fundStatus(balance, amount)}</div>
                </div>
                <Link className="submitButton" type="submit" to="../recipient">
                    <button disabled={transferError} className="button">Continue</button>
                </Link>
            </form>
        </div>
    )
}

export default Transfer
