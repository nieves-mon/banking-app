import React from "react"
import "./Transactions.css"
import {
    Routes,
    Route
} from "react-router-dom";
import Deposit from "../Deposit/Deposit.js"
import DepositConfirmation from "../Deposit/DepositConfirmation.js"
import FinalDeposit from "../Deposit/FinalDeposit.js"

import Withdraw from "../Withdraw/Withdraw.js"
import WithdrawalConfirmation from "../Withdraw/WithdrawalConfirmation.js"
import FinalWithdrawal from "../Withdraw/FinalWithdrawal.js"

import Transfer from "../Transfer/Transfer.js"
import Recipient from "../Transfer/Recipient.js"
import TransferConfirmation from "../Transfer/TransferConfirmation.js"
import FinalTransfer from "../Transfer/FinalTransfer.js"

import LatestTransactions from "../LatestTransactions/LatestTransactions.js"

const Transactions = () => {
    const tempUser = {name:"B", email: "b@gmail.com", balance:10000}
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div>
            <div className="dateContainer">
                <div className="dateLabel">DATE</div>
                <div className="dateActual">{date}</div>
            </div>
            <div className="balanceContainer">
                <div className="balanceLabel">BALANCE</div>
                <div className="balanceActual">{tempUser.balance.toLocaleString(undefined, {maximumFractionDigits:2})}</div>
            </div>
            <div className="transactionsContainer">
                <Routes>                    
                    <Route path="/deposit" element={<Deposit />}/>
                    <Route path="/depositConfirmation" element={<DepositConfirmation />}/>
                    <Route path="/finalDeposit" element={<FinalDeposit />}/>
                    
                    <Route path="/withdraw" element={<Withdraw />}/>
                    <Route path="/withdrawalConfirmation" element={<WithdrawalConfirmation />}/>
                    <Route path="/finalWithdrawal" element={<FinalWithdrawal />}/>
                    
                    <Route path="/transfer" element={<Transfer />}/>
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