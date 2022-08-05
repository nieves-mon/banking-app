import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import "./Transfer.css"

const Transfer = ({users, currUser, balance, updateBalance, setPage}) => {
    const [otherUser, setOtherUser] = useState("");
    const [transfer, setTransfer] = useState(0)

    const filteredUsers = users.filter(user => user.name !== currUser.name);

    const handleSubmit = (e) => {
        e.preventDefault();

        let idx;
        for(let i = 0; i < filteredUsers.length; i++) {
            if(filteredUsers[i].name.toLowerCase() === otherUser.toLowerCase().trim()) {
                idx = i;
                break;
            }
        }

        if(idx === -1) {
            console.log("fail");
            return;
        }

        console.log(idx);
        updateBalance(currUser, "transfer", parseFloat(transfer), "Transfer To", users[idx]);
    }

    function fundStatus(balance, transfer) {
        if ((balance - transfer) < 0) {
            return <p className="warning">You have not enough funds in your account</p>;
        }
        return <p>You have <span>&#8369;</span>{(balance - transfer).toLocaleString(undefined, {maximumFractionDigits:2})} available in your account</p>
    }

    useEffect(() => {
        setPage("transfer");
    }, [setPage]);

    return (
        <div className="transactionContainer">
            <form className="deductTransfer" onSubmit={e => {handleSubmit(e)}}>
                <div className="inputTransfer">
                    <label htmlFor="other-user">Transfer to:</label>
                    <input
                        required
                        id="other-user"
                        type="text"
                        value={otherUser}
                        onChange={e => setOtherUser(e.target.value)}
                    />

                    <label htmlFor="transfer">Send</label>
                        <input
                            required
                            id="transfer"
                            className="transferAmount"
                            name="transfer"
                            type="number"
                            value={transfer}
                            min="0"
                            onChange={e => setTransfer(e.target.value)}
                        />
                    <div className="statusText">{fundStatus(balance, transfer)}</div>
                </div>
                <button type="submit">Continue</button>
            </form>
        </div>
    )
}

export default Transfer
