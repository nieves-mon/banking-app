import React, { useEffect } from "react";
import "./TransactionList.css";

const TransactionList = ({currUser, setPage}) => {
    useEffect(() => {
        setPage("history");
    }, [setPage]);

    return(
        <table className="transaction-table">
            <thead className="transaction-table-head">
                <tr>
                    <th>DATE</th>
                    <th>TYPE</th>
                    <th>AMOUNT</th>
                </tr>
            </thead>

            <tbody>
                {currUser.history.length > 0 ? currUser.history.map((transaction, i) => {
                    return (
                        <tr className="transaction-row" key={`transaction${i}`}>
                            <td className="date">{transaction.date}</td>
                            <td className="type">{transaction.type[0].toUpperCase() + transaction.type.substring(1)}</td>
                            <td className={transaction.type.endsWith("Deposit") || transaction.type.startsWith("Transfer From") ? "amount debit" : "amount credit"}>
                                ₱ {parseFloat(transaction.amount).toLocaleString(undefined, {maximumFractionDigits:2})}
                            </td>
                        </tr>
                    )
                }) :
                    <tr className="no-match">
                        <td className="no-match-text" colSpan="5">No Transaction Hisotry</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

export default TransactionList;
