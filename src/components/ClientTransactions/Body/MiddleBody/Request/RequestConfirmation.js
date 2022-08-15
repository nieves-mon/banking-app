import React from "react"
import { Link } from "react-router-dom";
import "../Transactions/TransactionConfirmation.css"


const RequestConfirmation = ({users, currUser, other, amount, balance, updateBalance}) => {
    // const [reference, setReference] = useState("")

    const idx = users.findIndex(user => user.email === other);

    const handleConfirm = (e) => {
        updateBalance(currUser, "Request", parseFloat(amount), "Request From", users[idx]);
    }

    return (
        <div>
            <div className="transactionDetailsContainer">
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Request details</div>
                    <Link to="../request"><div className="transactionDetailActual">Edit</div></Link>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Request exactly</div>
                    <div className="transactionDetailActual">₱ {amount}</div>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Balance afterwards</div>
                    <div className="transactionDetailActual">₱ {parseFloat(balance) + parseFloat(amount)}</div>
                </div>
            </div>
            <div className="transactionDetailsContainer">
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Requestee details</div>
                    <Link to="../requestee"><div className="transactionDetailActual">Change</div></Link>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Name</div>
                    <div className="transactionDetailActual">{users[idx].name}</div>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Email</div>
                    <div className="transactionDetailActual">{users[idx].email}</div>
                </div>
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Account number</div>
                    <div className="transactionDetailActual">{users[idx].cardNumber}</div>
                </div>
            </div>
            {/* <div className="transactionDetailsContainer">
                <div className="transactionDetails">
                    <div className="transactionDetailLabel">Reference (optional)</div>
                    <div className="transactionDetailActual">
                        <input
                            required
                            id="transferReference"
                            className="transactionReference"
                            name="reference"
                            type="text"
                            value={reference}
                            onChange={e => setReference(e.target.value)}
                        />
                    </div>
                </div>
            </div> */}
            <Link className="submitButton" type="submit" to="../finalRequest">
                <button className="button" onClick={e => handleConfirm(e)}>Confirm and send</button>
            </Link>
        </div>
    )
}

export default RequestConfirmation
