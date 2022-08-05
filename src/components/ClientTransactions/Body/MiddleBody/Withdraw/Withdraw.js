import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import "../Transactions/Transaction.css"

const Withdraw = ({withdraw, setWithdraw, balance, setPage}) => {
    let withdrawError = false;

    function fundStatus(balance, withdrawal) {
        if (withdraw.length < 1) {
            withdrawError = true
            return <p className="warning">Type an amount to withdraw</p>
        }
        if ((balance - parseFloat(withdraw)) < 0) {
            withdrawError = true
            return <p className="warning">You have not enough funds in your account</p>;
        }
        return <p>You have <span>&#8369;</span>{(balance - withdraw).toLocaleString(undefined, {maximumFractionDigits:2})} available in your account</p>
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
                            min="0"
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
