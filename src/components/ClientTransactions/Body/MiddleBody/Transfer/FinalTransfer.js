import React, { useState } from "react"

import {
    Link
  } from "react-router-dom";

import "./FinalTransfer.css"

const FinalTransfer = () => {

    return (
        <div>
            <div>Done!</div>
            <div>Your money has been transferred and ready to use.</div>
            <div>
                <Link to="/latestTransactions">
                    <div>Got it!</div>
                </Link>
                <div>Invite and earn PHP1,000</div>
            </div>
        </div>        
    )
}

export default FinalTransfer