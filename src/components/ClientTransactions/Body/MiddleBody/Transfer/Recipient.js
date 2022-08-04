import React, { useState } from "react"
import { Link } from "react-router-dom";

const Recipient = () => {
    const tempUser = {name:"B", email: "b@gmail.com", balance:10000}
    const tempRecipient = {name:"B", email: "b@gmail.com", balance:10000}
    const [recipient, setRecipient] = useState(tempRecipient.name)
    const [transfer] = useState(50000)

    const handleSubmit = (e) => {
        e.preventDefault();
        setRecipient();
    }

    return (
        <form onSubmit={e => {handleSubmit(e)}}>
            <div>
                <label>Who are you sending money to?</label>
                <div>Search</div>
                <div>Your recipients</div>
                <Link to="/transferConfirmation">
                    <div>A</div>
                </Link>
                <div>Show more</div>
                <div>New recipient</div>
            </div>
        </form>
    )
}

export default Recipient
