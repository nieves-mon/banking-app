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

const Transactions = ({users, updateUsers, currUser, changeCurrUser}) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [balance, setBalance] = useState(currUser.balance);

    const updateBalance = (user, type, amount) => {
        switch(type) {
            case "deposit":
                setBalance(balance + amount);
                break;
            case "withdraw":
                setBalance(balance - amount);
        }

        let idx = users.findIndex(obj => obj.name === user.name);
        users[idx].balance = balance;
        updateUsers(users);
        changeCurrUser(users[idx]);
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
                    <Route path="/deposit" element={<Deposit currUser={currUser} balance={balance} updateBalance={updateBalance} changeCurrUser={changeCurrUser} />}/>
                    <Route path="/withdraw" element={<Withdraw currUser={currUser} balance={balance} />}/>

                    <Route path="/transfer" element={<Transfer currUser={currUser} balance={balance} />}/>
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
