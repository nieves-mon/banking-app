import React, { useEffect } from "react"

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
            
                <p>You requested {amount} to be transferred to your account</p>

        </div>
    )
}

export default Home