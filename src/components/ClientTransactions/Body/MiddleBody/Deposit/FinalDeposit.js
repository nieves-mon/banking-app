import React, { useState } from "react"

import {
    Link
  } from "react-router-dom";

import "../Transactions/FinalTransaction.css"

const FinalDeposit = () => {

    return (
        <div className="finalTransactionContainer">
            <div className="doneTransaction">Done!</div>
            <div className="finalTransaction">Money has been deposited by A.</div>
            <div>
                <Link className="submitButton" type="submit" to="/latestTransactions"><button className="button">Got it!</button></Link> 
            </div>
        </div>        
    )
}

export default FinalDeposit