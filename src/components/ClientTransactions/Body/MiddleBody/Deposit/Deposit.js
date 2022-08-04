import React, { useState } from "react"
import "./Deposit.css"

const Deposit = () => {
    const tempUser = {name:"A", email: "a@gmail.com", balance:50000}
    const [balance, setBalance] = useState(tempUser.balance)
    const [deposit, setDeposit] = useState(0)

    const addDeposit = () => {
        tempUser.balance += deposit
        setBalance(parseInt(deposit) + balance)
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
                    min="0"
                    onChange={e => setDeposit(e.target.value)}
                />
            </div>
            <button className="submitButton" type="submit">Submit</button>
            <div>
                Your balance is {balance}.
            </div>
        </form>
    )
}

export default Deposit