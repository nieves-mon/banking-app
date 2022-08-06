import React from "react"

import {
    Link
  } from "react-router-dom";

import "../Transactions/FinalTransaction.css"

const FinalTransfer = ({users, currUser, other, amount}) => {
    const idx = users.findIndex(user => user.email === other);

    return (
        <div className="finalTransactionContainer">
            <div className="doneTransaction">Done!</div>
            <div className="finalTransaction">₱ {amount} has been transferred from {currUser.name} to {users[idx].name} and ready to use.</div>
            <div>
                <Link className="submitButton" type="submit" to="../history"><button className="button">Got it!</button></Link>
            </div>
        </div>
    )
}

export default FinalTransfer
