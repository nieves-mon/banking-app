import React, { useState } from "react"
import "./Deposit.css"

const Deposit = ({currUser, balance, updateBalance}) => {
    const [deposit, setDeposit] = useState(0)

    const addDeposit = () => {
        updateBalance(currUser, "deposit", parseFloat(deposit))
        return;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addDeposit();
        setDeposit(0);
    }

    return (
        <form className="addDeposit" onSubmit={e => {handleSubmit(e)}}>
            <div>
                <label htmlFor="deposit">Amount PHP</label>
                <input
                    required
                    id="deposit"
                    className="depositAmount"
                    name="deposit"
                    type="number"
                    value={deposit}
                    min="0.0"
                    step="any"
                    onChange={e => {setDeposit(e.target.value)}}
                />
            </div>
            <button className="submitButton" type="submit">Submit</button>
            <div>
                Your balance is {balance}
            </div>
        </form>
    )
}

export default Deposit
