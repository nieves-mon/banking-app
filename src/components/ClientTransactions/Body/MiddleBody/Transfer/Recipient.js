import React, { useState } from "react"
import "../Transactions/Transaction.css"

import {
    Link
  } from "react-router-dom";

const Recipient = () => {
    const tempUser = {name:"B", email: "b@gmail.com", balance:10000}
    const tempRecipient = {name:"A", email: "a@gmail.com", balance:20000}
    const [recipient, setRecipient] = useState(tempRecipient.name)
    let transactionError = false

    const handleSubmit = (e) => {
        e.preventDefault();
        setRecipient();
    }

    function transactionError(recipient) {
        if (recipient == []) {
            transactionError = true
            return <p className="warning">Recipient is not our customer</p>
        }
        return <p>Recipient is our customer</p>
    }

    return (    
        <div className="transactionContainer">
            <form className="transaction" onSubmit={e => {handleSubmit(e)}}>
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
                    <div className="statusText">{transactionError(recipient)}</div>
                </div>       
                <Link className="submitButton" type="submit" to="/transferConfirmation"><button disabled={transactionError} className="button">Continue</button></Link>         
            </form>
        </div>
    )
}

export default Recipient