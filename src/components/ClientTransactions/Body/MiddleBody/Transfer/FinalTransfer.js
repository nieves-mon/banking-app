import React, { useState } from "react"

import {
    Link
  } from "react-router-dom";

import "../Transactions/FinalTransaction.css"

const FinalTransfer = () => {

    return (
        <div className="finalTransactionContainer">
            <div className="doneTransaction">Done!</div>
            <div className="finalTransaction">Money has been transferred from A to B and ready to use.</div>
            <div>
                <Link className="submitButton" type="submit" to="/latestTransactions"><button className="button">Got it!</button></Link> 
            </div>
        </div>        
    )
}

export default FinalTransfer