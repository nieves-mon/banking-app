import React, { useEffect, useState, useContext } from "react"
/*import { Link } from "react-router-dom"*/

import "../Transactions/Transaction.css"
import { PageContext } from "../../../../../contexts/PageContext";
import { UsersContext } from "../../../../../contexts/UsersContext";

const Home = ({updateBalance}) => {
    const [users, updateUsers, currUser, changeCurrUser] = useContext(UsersContext);
    const [page, setPage] = useContext(PageContext);
    const userIdx = users.findIndex(user => user.name === currUser.name);
    const toIdx = currUser.sentRequests.length === 0 ? null
                : users.findIndex(user => user.email === currUser.sentRequests[0].toUser);
    const fromIdx = currUser.receivedRequests.length === 0  ? null
                : users.findIndex(user => user.email === currUser.receivedRequests[0].fromUser);

    useEffect(() => {
        setPage("home");
    }, [setPage]);

    const handleClick = (choice) => {
        const tempUsers = JSON.parse(localStorage.getItem("users"));
        switch(choice) {
            case "Approve":
                updateBalance(currUser, "Request", parseFloat(currUser.receivedRequests[0].amount), "Requested Transfer To", users[fromIdx]);
                break;
            case "Cancel":
                if(currUser.sentRequests.length > 0) {
                    tempUsers[userIdx].sentRequests.splice(0, 1);
                    tempUsers[toIdx].receivedRequests.splice(0, 1);
                } else {
                    tempUsers[fromIdx].sentRequests.splice(0, 1);
                    tempUsers[userIdx].receivedRequests.splice(0, 1);
                }
                updateUsers([...tempUsers]);
                changeCurrUser(tempUsers[userIdx]);
        }
    }

    return (
        <div className="transactionContainer">
            {currUser.sentRequests.length > 0 && <div className="transaction">
                <div className="inputContainer">
                    <label htmlFor="transfer">You requested {users[toIdx].name} to transfer ₱{parseFloat(currUser.sentRequests[0].amount).toLocaleString(undefined, {maximumFractionDigits:2})} to your account</label>
                </div>
                <div className="submitButton">
                    <button className="button" onClick={e => handleClick("Cancel")}>Cancel</button>
                </div>
            </div>}

            {currUser.receivedRequests.length > 0 && <div className="transaction">
                <div className="inputContainer">
                    <label htmlFor="transfer">{users[fromIdx].name} requested you to transfer ₱{parseFloat(currUser.receivedRequests[0].amount).toLocaleString(undefined, {maximumFractionDigits:2})} to their account</label>
                </div>
                <div className="submitButton">
                    <button className="button" onClick={e => handleClick("Approve")}>Confirm</button>
                </div>
                <div className="submitButton">
                    <button className="button" onClick={e => handleClick("Cancel")}>Cancel</button>
                </div>
            </div>}
        </div>
    )
}

export default Home
