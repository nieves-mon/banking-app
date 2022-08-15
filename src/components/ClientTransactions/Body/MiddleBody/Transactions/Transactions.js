import React, { useContext, useState } from "react"
import "./Transactions.css"
import {
    Routes,
    Route
} from "react-router-dom";
import { UsersContext } from "../../../../../contexts/UsersContext";
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

import LatestTransactions from "../LatestTransactions/LatestTransactions.js"
import TransactionList from "../TransactionList/TransactionList";
import Expense from "../Expense/Expense";

const Transactions = () => {
    const [users, updateUsers, currUser, changeCurrUser] = useContext(UsersContext);
    const current = new Date();
    const day = current.getDate() < 10 ? `0${current.getDate()}` : current.getDate();
    const month = (current.getMonth() + 1) < 10 ? `0${current.getMonth() + 1}` : current.getMonth() + 1;
    const date = `${current.getFullYear()}-${month}-${day}`;
    const [balance, setBalance] = useState(currUser.balance);
    const [amount, setAmount] = useState("");
    const [other, setOther] = useState("");

    const updateBalance = (user, type, amount, subType = null, otherUser = null) => {
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
                switch(subType) {
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
                desc = subType + " " + otherUser.name;
                break;
            case "Expense":
                newBalance = (parseFloat(user.balance) - amount).toFixed(2);
                desc += `: ${subType}`;
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
    }

    return (
        <div className="dashboard-container">
            <div className="dateContainer">
                <div className="dateLabel">DATE</div>
                <div className="dateActual">{date}</div>
            </div>
            <div className="balanceContainer">
                <div className="balanceLabel">BALANCE</div>
                <div className="balanceActual">₱ {parseFloat(currUser.balance).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
            </div>
            <div className="transactionsContainer">
                <Routes>
                    <Route path="/history" element={<TransactionList currUser={currUser}/>}/>
                    <Route path="/expense" element={<Expense cost={amount} setCost={setAmount} updateBalance={updateBalance}/>}/>

                    <Route path="/deposit" element={<Deposit currUser={currUser} deposit={amount} setDeposit={setAmount} balance={balance}/>}/>
                    <Route path="/depositConfirmation" element={<DepositConfirmation currUser={currUser} deposit={amount} balance={balance} updateBalance={updateBalance}/>}/>
                    <Route path="/finalDeposit" element={<FinalDeposit currUser={currUser} deposit={amount} setDeposit={setAmount}/>}/>

                    <Route path="/withdraw" element={<Withdraw currUser={currUser} withdraw={amount} setWithdraw={setAmount} balance={balance}/>}/>
                    <Route path="/withdrawalConfirmation" element={<WithdrawalConfirmation  currUser={currUser} withdraw={amount} balance={balance} updateBalance={updateBalance}/>}/>
                    <Route path="/finalWithdrawal" element={<FinalWithdrawal  currUser={currUser} withdraw={amount} setWithdraw={setAmount} />}/>

                    <Route path="/transfer" element={<Transfer currUser={currUser} amount={amount} setAmount={setAmount} balance={balance}/>}/>
                    <Route path="/recipient" element={<Recipient users={users} currUser={currUser} setOther={setOther}/>}/>
                    <Route path="/transferConfirmation" element={<TransferConfirmation users={users} currUser={currUser} other={other} amount={amount} balance={balance} updateBalance={updateBalance}/>}/>
                    <Route path="/finalTransfer" element={<FinalTransfer users={users} currUser={currUser} other={other} amount={amount}/>}/>
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
