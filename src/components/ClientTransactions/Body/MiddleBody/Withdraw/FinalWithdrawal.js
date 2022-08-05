import React from "react"
import { Link } from "react-router-dom";
import "../Transactions/FinalTransaction.css"

const FinalWithdrawal = ({currUser, withdraw}) => {

    return (
        <div className="finalTransactionContainer">
            <div className="doneTransaction">Done!</div>
            <div className="finalTransaction">₱{withdraw} has been withdrawn from {currUser.name}'s Account.</div>
            <div>
                <Link className="submitButton" type="submit" to="/latestTransactions">
                    <button className="button">Got it!</button>
                </Link>
            </div>
        </div>
    )
}

export default FinalWithdrawal
