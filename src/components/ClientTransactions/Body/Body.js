import React from "react"
import "./Body.css"

import {
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./LeftBody/Navbar/Navbar.js"
import Logout from "./LeftBody/Logout/Logout.js"
import Transactions from "./MiddleBody/Transactions/Transactions.js"
import TransactionDetails from "./MiddleBody/Transactions/TransactionDetails.js"
import RightBody from "./RightBody/RightBody.js"

const Body = () => {
    return (
        <div className="bodyContainer">
            <div className="leftBodyContainer">
                <Navbar />
                <Logout />
            </div>
            <div className="middleBodyContainer">
                <Transactions />
            </div>
            <div className="rightBodyContainer">
                <RightBody />
            </div>
        </div>
    )
}

export default Body