import React, { useState } from "react";
import "./CreateUser.css"

const CreateUser = () => {
    const [name, setName] = useState("");
    const [balance, setBalance] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={e => {handleSubmit(e)}}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                value={email}
                placeholder="sample@email.com"
                onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="userName"
                type="text"
                value={name}
                placeholder="John Doe"
                onChange={e => setName(e.target.value)}
            />

            <label htmlFor="balance">Initial Balance</label>
            <input
                id="balance"
                name="balance"
                type="number"
                value={balance}
                min="0"
                onChange={e => setBalance(e.target.value)}
            />

            <button type="submit">Create New User</button>
        </form>
    )
}

export default CreateUser;
