import React, { useState } from "react"

const Withdraw = () => {
    const tempUser = {name:"A", email: "a@gmail.com", balance:50000}
    const [balance, setBalance] = useState(tempUser.balance)
    const [withdrawal, setWithdrawal] = useState(0)

    const deductWithdrawal = () => {
        tempUser.balance -= withdrawal
        setBalance(balance - parseInt(withdrawal))
        return;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        deductWithdrawal();
    }

    return (
        <form className="deductWithdrawal" onSubmit={e => {handleSubmit(e)}}>
            <div>
                <label htmlFor="withdrawal">Amount</label>
                <input
                    required
                    id="withdrawal"
                    name="withdrawal"
                    type="number"
                    value={withdrawal}
                    min="0"
                    onChange={e => setWithdrawal(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
            <div>
                Your balance is {balance}.
            </div>
        </form>
    )
}

export default Withdraw
