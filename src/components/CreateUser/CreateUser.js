import React, { useState } from "react";
import "./CreateUser.css"

const CreateUser = ({users, setUsers}) => {
    const [name, setName] = useState("");
    const [balance, setBalance] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const vaildNewUser = (newUser) => {
        let valid = {
            unique: true,
            doesNotStartWithNum: true
        };

        if(newUser.name.charAt(0) >= "0" && newUser.name.charAt(0) <= "9") {
            valid.doesNotStartWithNum = false;
        }

        users.forEach(user => {
            if(user.name === newUser.name) {
                valid.unique = false;
            }
        });

        return valid;
    }

    const addUser = (newUser) => {
        const validity = vaildNewUser(newUser);
        if(!validity.unique) {
            alert(`${newUser.name} already exists!`);
            return;
        }

        if(!validity.doesNotStartWithNum) {
            alert(`Name cannot start with a number!`);
            return;
        }

        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        setUsers(JSON.parse(localStorage.getItem("users")));
        console.log(users);
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
        addUser({"name":capitalize(name), "email":email, "password":password, "balance":balance});
    }

    return (
        <form className="create-user" onSubmit={e => {handleSubmit(e)}}>
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
            /></div>

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
                <label htmlFor="balance">Initial Balance</label>
                <input
                    required
                    id="balance"
                    name="balance"
                    type="number"
                    value={balance}
                    min="0"
                    onChange={e => setBalance(e.target.value)}
                />
            </div>

            <button type="submit">Create New User</button>
        </form>
    )
}

export default CreateUser;
