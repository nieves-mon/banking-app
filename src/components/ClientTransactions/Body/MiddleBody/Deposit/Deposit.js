import React, { useState } from "react"
import "./Deposit.css"

const Deposit = ({currUser, balance, updateBalance}) => {
    const [deposit, setDeposit] = useState("")

    const addDeposit = () => {
        updateBalance(currUser, "deposit", parseFloat(deposit))
        setDeposit("0");
        return;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addDeposit();
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
                    placeholder="0"
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
