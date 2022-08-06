import React  from "react"
import { Link } from "react-router-dom";
import "../Transactions/FinalTransaction.css"

const FinalDeposit = ({currUser, deposit}) => {
    return (
        <div className="finalTransactionContainer">
            <div className="doneTransaction">Done!</div>
            <div className="finalTransaction">₱{deposit} has been deposited to {currUser.name}'s Account.</div>
            <div>
                <Link className="submitButton" type="submit" to="../history">
                    <button className="button">Got it!</button>
                </Link>
            </div>
        </div>
    )
}

export default FinalDeposit
