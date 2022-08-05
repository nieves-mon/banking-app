import React, { useState } from "react"
import "./Transactions.css"
import {
    Routes,
    Route
} from "react-router-dom";
import Deposit from "../Deposit/Deposit.js"
import Withdraw from "../Withdraw/Withdraw.js"
import Transfer from "../Transfer/Transfer.js"

import Recipient from "../Transfer/Recipient.js"
import TransferConfirmation from "../Transfer/TransferConfirmation.js"
import FinalTransfer from "../Transfer/FinalTransfer.js"

import LatestTransactions from "../LatestTransactions/LatestTransactions.js"
import TransactionList from "../TransactionList/TransactionList";

const Transactions = ({users, updateUsers, currUser, changeCurrUser, setPage}) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [balance, setBalance] = useState(0);

    const updateBalance = (user, type, amount) => {
        let newBalance;
        switch(type) {
            case "deposit":
                newBalance = (parseFloat(balance) + amount).toFixed(2);
                break;
            case "withdraw":
                newBalance = (parseFloat(balance) - amount).toFixed(2);
        }
        setBalance(newBalance);

        const idx = users.findIndex(obj => obj.name === user.name);
        const tempUsers = JSON.parse(localStorage.getItem("users"));
        tempUsers[idx].balance = newBalance;
        tempUsers[idx].history.push({"date": date, "type": type, "amount": amount});

        updateUsers([...tempUsers]);
        changeCurrUser(tempUsers[idx]);
        console.log(amount);
    }

    return (
        <div>
            <div className="dateContainer">
                <div className="dateLabel">DATE</div>
                <div className="dateActual">{date}</div>
            </div>
            <div className="balanceContainer">
                <div className="balanceLabel">BALANCE</div>
                <div className="balanceActual">{balance.toLocaleString(undefined, {maximumFractionDigits:2})}</div>
            </div>
            <div className="transactionsContainer">
                <Routes>
                    <Route path="/history" element={<TransactionList currUser={currUser} setPage={setPage}/>}/>
                    <Route path="/deposit" element={<Deposit currUser={currUser} balance={balance} updateBalance={updateBalance} setPage={setPage}/>}/>
                    <Route path="/withdraw" element={<Withdraw currUser={currUser} balance={balance} updateBalance={updateBalance} setPage={setPage}/>}/>

                    <Route path="/transfer" element={<Transfer currUser={currUser} balance={balance} updateBalance={updateBalance} setPage={setPage}/>}/>
                    <Route path="/recipient" element={<Recipient />}/>
                    <Route path="/transferConfirmation" element={<TransferConfirmation />}/>
                    <Route path="/finalTransfer" element={<FinalTransfer />}/>
                </Routes>
            </div>
            <div>
                <Routes>
                    <Route path="/latestTransactions" element={<LatestTransactions />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Transactions
