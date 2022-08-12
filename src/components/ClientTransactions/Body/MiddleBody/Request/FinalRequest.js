import React from "react"

import {
    Link
  } from "react-router-dom";

import "../Transactions/FinalTransaction.css"

const FinalRequest = ({users, currUser, other, amount}) => {
    const idx = users.findIndex(user => user.email === other);

    return (
        <div className="finalTransactionContainer">
            <div className="doneTransaction">Done!</div>
            <div className="finalTransaction">Your request of ₱ {amount} was sent to {users[idx].name}.</div>
            <div>
                <Link className="submitButton" type="submit" to="../home"><button className="button">Got it!</button></Link>
            </div>
        </div>
    )
}

export default FinalRequest
