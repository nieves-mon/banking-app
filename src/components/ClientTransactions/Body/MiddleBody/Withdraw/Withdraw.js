import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom";
import "../Transactions/Transaction.css"
import { PageContext } from "../../../../../contexts/PageContext";

const Withdraw = ({withdraw, setWithdraw, balance}) => {
    const [page, setPage] = useContext(PageContext);
    let withdrawError = false;

    function fundStatus(balance, withdraw) {
        if(withdraw < 0) {
            withdrawError = true
            return <p className="warning">Amount cannot be negative</p>
        }
        if (withdraw.length < 1) {
            withdrawError = true
            return <p className="warning">Type an amount to withdraw</p>
        }
        if ((balance - parseFloat(withdraw)) < 0) {
            withdrawError = true
            return <p className="warning">Not enough funds in your account</p>;
        }
        return <p>New balance after withdraw will be <span>&#8369;</span>{(balance - withdraw).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
    }

    useEffect(() => {
        setWithdraw("");
        setPage("withdraw");
    }, [setWithdraw, setPage]);

    return (
        <div className="transactionContainer">
            <form className="transaction">
                <div className="inputContainer">
                    <label htmlFor="withdrawal">Withdraw exactly</label>
                        <input
                            required
                            id="withdrawal"
                            className="inputValue"
                            name="withdrawal"
                            type="number"
                            value={withdraw}
                            min="0.0"
                            step="any"
                            onChange={e => setWithdraw(e.target.value)}
                        />
                    <div className="statusText">{fundStatus(balance, withdraw)}</div>
                </div>
                <Link className="submitButton" type="submit" to="../withdrawalConfirmation">
                    <button disabled={withdrawError} className="button">Continue</button>
                </Link>
            </form>
        </div>
    )
}

export default Withdraw
