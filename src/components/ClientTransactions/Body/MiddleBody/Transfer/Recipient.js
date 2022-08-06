import React, { useState, useEffect } from "react"
import "../Transactions/Transaction.css"

import {
    Link
  } from "react-router-dom";

const Recipient = ({users, currUser, setOther}) => {
    const filteredUsers = users.filter(user => user.name !== currUser.name);
    const [recipient, setRecipient] = useState("");
    let transactionError = false;

    const recepientError = (recipient) => {
        if(recipient.length < 1) {
            transactionError = false;
            return <p>Please type a valid email address</p>;
        }

        const validEmail = (user) => {
            return user.email === recipient;
        }

        if(filteredUsers.every(user => !validEmail(user))) {
            transactionError = true;
            return <p className="warning">Recipient is not our customer</p>;
        } else {
            filteredUsers.forEach(user => {
                if(validEmail(user)) {
                    transactionError = false;
                }
            });

            if(!transactionError) {
                setOther(recipient)
                return <p>Recipient is our customer</p>;
            }
        }
    }

    const chooseRecipient = (i) => {
        setRecipient(users[i].email);
    }

    useEffect(() => {
        setRecipient("");
    }, [setRecipient]);

    return (
        <div className="transactionContainer">
            <form className="transaction">
                <div className="inputContainer">
                    <label htmlFor="recipient">Send to email</label>
                        <input
                            required
                            id="recipient"
                            className="inputValue"
                            name="recipient"
                            type="text"
                            value={recipient}
                            onChange={e => setRecipient(e.target.value)}
                        />
                    <div className="statusText">{recepientError(recipient)}</div>
                </div>
                <Link className="submitButton" type="submit" to="../transferConfirmation">
                    <button disabled={transactionError} className="button">Continue</button>
                </Link>
            </form>
            <div className="recipient-list-div">
                <table className="recipient-list">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Card Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, i) => {
                            return(
                                <tr key={`recipient${i}`} className="recipient-row" onClick={e => chooseRecipient(i)}>
                                    <td className="recipient-name">{user.name}</td>
                                    <td className="recipient-email">{user.email}</td>
                                    <td className="recipient-cn">{user.cardNumber}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Recipient
