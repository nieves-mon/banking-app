import React, { useState } from "react";
import "./CreateUser.css"
const validator = require("email-validator");

const CreateUser = ({users, updateUsers, changeCurrUser, togglePopup}) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [name, setName] = useState("");
    const [balance, setBalance] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validPassword = () => {
        let valid = true;

        if(password.length < 8 || password.length > 20) {
            valid = false;
        }

        return valid;
    }

    const validEmail = () => {
        const valid = {
            unique: true,
            validFormat: true
        }

        valid.validFormat = validator.validate(email);

        users.forEach(user => {
            if(user.email === email) {
                valid.unique = false;
            }
        })

        return valid;
    }

    const vaildName = () => {
        let valid = {
            unique: true,
            doesNotStartWithNum: true
        };

        if(name.charAt(0) >= "0" && name.charAt(0) <= "9") {
            valid.doesNotStartWithNum = false;
        }

        users.forEach(user => {
            if(user.name === name) {
                valid.unique = false;
            }
        });

        return valid;
    }

    const addUser = (newUser) => {
        const nameValidity = vaildName();
        if(!nameValidity.unique) {
            alert(`${newUser.name} already exists!`);
            return;
        }

        if(!nameValidity.doesNotStartWithNum) {
            alert(`Name cannot start with a number!`);
            return;
        }

        const emailValidity = validEmail();
        if(!emailValidity.unique) {
            alert(`${newUser.email} is already used in an existing account`);
            return;
        }

        if(!emailValidity.validFormat) {
            alert("Invalid email format");
            return;
        }

        if(!validPassword()) {
            alert("Password must be 8-20 characters long");
            return;
        }

        updateUsers([...users, newUser]);
        changeCurrUser(newUser);
        togglePopup();
        alert("Successfully created new user: " + newUser.name + "\nUser's card number: " + newUser.cardNumber);
    }

    const capitalize = (string) => {
        const subStrings = string.split(" ");

        for(let i = 0; i < subStrings.length; i++) {
            subStrings[i] = subStrings[i][0].toUpperCase() + subStrings[i].substr(1);
        }

        return subStrings.join(" ");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser({"name":capitalize(name),
                "email":email, "password":password,
                "balance":parseFloat(balance),
                "cardNumber": Date.now(),
                "cvc": Math.floor(Math.random() * (999 - 100 + 1) + 100),  //generate random number between 100 - 999
                "history": [{"date": date, "type":"Initial Deposit", "amount": parseFloat(balance)}]});
    }

    return (
        <form className="create-user" onSubmit={e => {handleSubmit(e)}}>
            <i className="fa-solid fa-xmark" onClick={togglePopup}></i>

            <div>
                <label htmlFor="name">Name</label>
                <input
                    required
                    id="name"
                    name="userName"
                    type="text"
                    value={name}
                    placeholder="John Doe"
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="email">Email Address</label>
                <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="sample@email.com"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="balance">Initial Balance</label>
                <input
                    required
                    id="balance"
                    name="balance"
                    type="number"
                    value={balance}
                    min="0.00"
                    step="any"
                    onChange={e => setBalance(e.target.value)}
                />
            </div>

            <button type="submit">Create New User</button>
        </form>
    )
}

export default CreateUser;
