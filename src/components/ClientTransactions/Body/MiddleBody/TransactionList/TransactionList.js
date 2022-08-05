import React, { useEffect } from "react";

const TransactionList = ({currUser, setPage}) => {
    useEffect(() => {
        setPage("history");
    }, [setPage]);

    return(
        <table className="user-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount</th>
                </tr>
            </thead>

            <tbody>
                {currUser.history.length > 0 ? currUser.history.map((transaction, i) => {
                    return (
                        <tr key={`transaction${i}`}>
                            <td className="date">{transaction.date}</td>
                            <td className="type">{transaction.type[0].toUpperCase() + transaction.type.substring(1)}</td>
                            <td className="amount">₱ {transaction.amount.toFixed(2)}</td>
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
