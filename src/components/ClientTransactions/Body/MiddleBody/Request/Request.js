import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { PageContext } from "../../../../../contexts/PageContext";

import "../Transactions/Transaction.css"

const Request = ({amount, setAmount, balance}) => {
    const [page, setPage] = useContext(PageContext);
    let requestError = false;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    function fundStatus(balance, amount) {
        if (amount < 0) {
            requestError = true
            return <p className="warning">Amount cannot be negative</p>
        }
        if (amount.length < 1) {
            requestError = true
            return <p className="warning">Type an amount to request</p>
        }
        return <p>New total balance once the request is approved will be <span>&#8369;</span>{(parseFloat(balance) + parseFloat(amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
    }

    useEffect(() => {
        setAmount("");
        setPage("request");
    }, [setPage, setAmount]);

    return (
        <div className="transactionContainer">
            <form className="transaction" onSubmit={e => {handleSubmit(e)}}>
                <div className="inputContainer">
                    <label htmlFor="request">Request exactly</label>
                        <input
                            required
                            id="request"
                            className="inputValue"
                            name="request"
                            type="number"
                            value={amount}
                            min="0.0"
                            step="any"
                            onChange={e => setAmount(e.target.value)}
                        />
                    <div className="statusText">{fundStatus(balance, amount)}</div>
                </div>
                <Link className="submitButton" type="submit" to="../requestee">
                    <button disabled={requestError} className="button">Continue</button>
                </Link>
            </form>
        </div>
    )
}

export default Request;
