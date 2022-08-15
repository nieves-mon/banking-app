import React, { useEffect, useState, useContext } from "react"
/*import { Link } from "react-router-dom"*/

import "../Transactions/Transaction.css"
import { PageContext } from "../../../../../contexts/PageContext";

const Home = ({amount, setAmount, users, other, request}) => {
    const idx = users.findIndex(user => user.email === other);
    const [buttonText, setButtonText] = useState("Cancel");
    const [disable, setDisable] = useState(false)
    const [page, setPage] = useContext(PageContext);

    useEffect(() => {
        setPage("home");
    }, [setPage]);

    const handleClick = () => {
        setButtonText("Cancelled");
        setDisable(true)
    }

    console.log(amount, setAmount, setPage)

    return (
        <div className="transactionContainer">
            {/* <div className="transaction">
                <div className="inputContainer">
                    <label htmlFor="transfer">You requested {users[idx].name} to transfer {amount} to your account</label>
                </div>
                <div className="submitButton">
                    <button className="button" disabled={disable} onClick={handleClick}>{buttonText}</button>
                </div>
            </div> */}
        </div>
    )
}

export default Home
