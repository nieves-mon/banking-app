import React, { useState } from "react"
import "./Transactions.css"
import {
    Routes,
    Route
} from "react-router-dom";
import Deposit from "../Deposit/Deposit"
import DepositConfirmation from "../Deposit/DepositConfirmation"
import FinalDeposit from "../Deposit/FinalDeposit"

import Withdraw from "../Withdraw/Withdraw.js"
import WithdrawalConfirmation from "../Withdraw/WithdrawalConfirmation.js"
import FinalWithdrawal from "../Withdraw/FinalWithdrawal.js"

import Transfer from "../Transfer/Transfer.js"
import Recipient from "../Transfer/Recipient.js"
import TransferConfirmation from "../Transfer/TransferConfirmation.js"
import FinalTransfer from "../Transfer/FinalTransfer.js"

import Request from "../Request/Request.js"
import Requestee from "../Request/Requestee.js"
import RequestConfirmation from "../Request/RequestConfirmation.js"
import FinalRequest from "../Request/FinalRequest.js"

import Home from "../Home/Home.js"

import LatestTransactions from "../LatestTransactions/LatestTransactions.js"
import TransactionList from "../TransactionList/TransactionList";

const Transactions = ({users, updateUsers, currUser, changeCurrUser, setPage}) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [balance, setBalance] = useState(currUser.balance);
    const [amount, setAmount] = useState("");
    const [other, setOther] = useState("");

    const updateBalance = (user, type, amount, transferType = null, otherUser = null) => {
        let newBalance;
        let desc = type;
        switch(type) {
            case "Deposit":
                newBalance = (parseFloat(user.balance) + amount).toFixed(2);
                break;
            case "Withdraw":
                newBalance = (parseFloat(user.balance) - amount).toFixed(2);
                break;
            case "Transfer":
                switch(transferType) {
                    case "Transfer To":
                        newBalance = (parseFloat(user.balance) - amount).toFixed(2);
                        updateBalance(otherUser, "Transfer", amount, "Transfer From", user);
                        break;
                    case "Transfer From":
                        newBalance = (parseFloat(user.balance) + amount).toFixed(2);
                        break;
                    default:
                        return;
                }
                desc = transferType + " " + otherUser.name;
                break;
            default:
                return;
        }
        setBalance(newBalance);

        const idx = users.findIndex(obj => obj.name === user.name);
        const tempUsers = JSON.parse(localStorage.getItem("users"));
        tempUsers[idx].balance = newBalance;
        tempUsers[idx].history.unshift({"date": date, "type": desc, "amount": amount});

        updateUsers([...tempUsers]);
        changeCurrUser(tempUsers[idx]);

        tempUsers[idx].sendRequest.unshift({"date": date, "requestee": tempUsers, "amount": amount});
    }

    return (
        <div className="dashboard-container">
            <div className="dateContainer">
                <div className="dateLabel">DATE</div>
                <div className="dateActual">{date}</div>
            </div>
            <div className="balanceContainer">
                <div className="balanceLabel">BALANCE</div>
                <div className="balanceActual">₱ {parseFloat(balance).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
            </div>
            <div className="transactionsContainer">
                <Routes>
                    <Route path="/history" element={<TransactionList currUser={currUser} setPage={setPage}/>}/>

                    <Route path="/home" element={<Home currUser={currUser} amount={amount} setPage={setPage}/>}/>

                    <Route path="/deposit" element={<Deposit currUser={currUser} deposit={amount} setDeposit={setAmount} balance={balance} setPage={setPage}/>}/>
                    <Route path="/depositConfirmation" element={<DepositConfirmation currUser={currUser} deposit={amount} balance={balance} updateBalance={updateBalance}/>}/>
                    <Route path="/finalDeposit" element={<FinalDeposit currUser={currUser} deposit={amount} setDeposit={setAmount}/>}/>

                    <Route path="/withdraw" element={<Withdraw currUser={currUser} withdraw={amount} setWithdraw={setAmount} balance={balance} setPage={setPage}/>}/>
                    <Route path="/withdrawalConfirmation" element={<WithdrawalConfirmation  currUser={currUser} withdraw={amount} balance={balance} updateBalance={updateBalance}/>}/>
                    <Route path="/finalWithdrawal" element={<FinalWithdrawal  currUser={currUser} withdraw={amount} setWithdraw={setAmount} />}/>

                    <Route path="/transfer" element={<Transfer currUser={currUser} amount={amount} setAmount={setAmount} balance={balance} setPage={setPage}/>}/>
                    <Route path="/recipient" element={<Recipient users={users} currUser={currUser} setOther={setOther}/>}/>
                    <Route path="/transferConfirmation" element={<TransferConfirmation users={users} currUser={currUser} other={other} amount={amount} balance={balance} updateBalance={updateBalance}/>}/>
                    <Route path="/finalTransfer" element={<FinalTransfer users={users} currUser={currUser} other={other} amount={amount}/>}/>

                    <Route path="/request" element={<Request currUser={currUser} amount={amount} setAmount={setAmount} balance={balance} setPage={setPage}/>}/>
                    <Route path="/requestee" element={<Requestee users={users} currUser={currUser} setOther={setOther}/>}/>
                    <Route path="/requestConfirmation" element={<RequestConfirmation users={users} currUser={currUser} other={other} amount={amount} balance={balance} updateBalance={updateBalance}/>}/>
                    <Route path="/finalRequest" element={<FinalRequest users={users} currUser={currUser} other={other} amount={amount}/>}/>
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