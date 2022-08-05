import React, { useState, useEffect } from "react"

const Withdraw = ({currUser, balance, updateBalance, setPage}) => {
    const [withdrawal, setWithdrawal] = useState("")

    const deductWithdrawal = () => {
        updateBalance(currUser, "withdraw", parseFloat(withdrawal))
        setWithdrawal("");
        return;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        deductWithdrawal();
    }

    useEffect(() => {
        setPage("withdraw");
    }, [setPage]);

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
                    min="0.0"
                    step="any"
                    placeholder="0"
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
