import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { PageContext } from "../../../../../contexts/PageContext";

const Deposit = ({deposit, setDeposit, balance}) => {
    const [page, setPage] = useContext(PageContext);
    let depositError = false

    function fundStatus(balance, deposit) {
        if(deposit < 0) {
            depositError = true
            return <p className="warning">Amount cannot be negative</p>
        }
        if (deposit.length === 0) {
            depositError = true
            return <p className="warning">Type an amount to deposit</p>
        }
        return <p>New total balance will be <span>&#8369;</span>{(parseFloat(balance) + parseFloat(deposit)).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
    }

    useEffect(() => {
        setDeposit("");
        setPage("deposit");
    }, [setPage, setDeposit]);

    return (
        <div className="transactionContainer">
            <form className="transaction" >
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
                    <Link className="submitButton" type="submit" to="../depositConfirmation">
                        <button disabled={depositError} className="button">Continue</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Deposit
