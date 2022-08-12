import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import "../Transactions/Transaction.css"

const Home = ({amount, setAmount, setPage}) => {

    /*
    useEffect(() => {
        setAmount("");
        setPage("transfer");
    }, [setPage, setAmount]);
    */

    console.log(amount, setAmount, setPage)

    return (
        <div className="transactionContainer">
            <div className="transaction">
                <div className="inputContainer">
                    <label htmlFor="transfer">You requested {amount} to be transferred to their account</label>
                </div>
                <Link className="submitButton" type="submit" to="../recipient">
                    <button className="button">Cancel</button>
                </Link>
            </div>
        </div>
    )
}

export default Home