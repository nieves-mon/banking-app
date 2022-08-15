import React, { useState, useEffect } from "react"
import "../Transactions/Transaction.css"
import "./Requestee.css"
import { Link } from "react-router-dom";

const Requestee = ({users, currUser, other, setOther}) => {
    const filteredUsers = users.filter(user => user.name !== currUser.name);
    let transactionError = false;

    const requesteeError = (other) => {
        if(other.length < 1) {
            transactionError = false;
            return <p>Please type a valid email address</p>;
        }

        const validEmail = (user) => {
            return user.email === other;
        }

        if(filteredUsers.every(user => !validEmail(user))) {
            transactionError = true;
            return <p className="warning">Requestee is not our customer</p>;
        } else {
            filteredUsers.forEach(user => {
                if(validEmail(user)) {
                    transactionError = false;
                }
            });

            if(!transactionError) {
                return <p>Requestee is our customer</p>;
            }
        }
    }

    const chooseRequestee = (i) => {
        setOther(filteredUsers[i].email);
    }

    useEffect(() => {
        setOther("");
    }, [setOther]);

    return (
        <div className="transactionContainer">
            <form className="transaction">
                <div className="inputContainer">
                    <label htmlFor="requestee">Send to email</label>
                        <input
                            required
                            id="requestee"
                            className="inputValue"
                            name="requestee"
                            type="text"
                            value={other}
                            onChange={e => setOther(e.target.value)}
                        />
                    <div className="statusText">{requesteeError(other)}</div>
                </div>
                <Link className="submitButton" type="submit" to="../requestConfirmation">
                    <button disabled={transactionError} className="button">Continue</button>
                </Link>
            </form>
            <div className="requestee-list-div">
                <table className="requestee-list">
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
                                <tr key={`requestee${i}`} className="requestee-row" onClick={e => chooseRequestee(i)}>
                                    <td className="requestee-name">{user.name}</td>
                                    <td className="requestee-email">{user.email}</td>
                                    <td className="requestee-cn">{user.cardNumber}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Requestee
