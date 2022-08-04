import React, { useState }from "react";
import PasswordInput from "./PasswordInput/PasswordInput";
import UserNameInput from "./UserNameInput.js/UserNameInput";

const LoginPage = ({setloggedIn}) => {
    const [usernameIn, setUsernameIn] = useState("");
    const [passwordIn, setPasswordIn] = useState("");

    const isValidLogin = () => {
        const valid = [true, true];

        if(usernameIn !== "admin") {
            valid[0] = false;
        }

        if(passwordIn !== "12345678") {
            valid[1] = false;
        }

        return valid;
    }

    const handleSubmit = () => {
        const validity = isValidLogin();
        if(validity[0] && validity[1]) {
            setloggedIn(true);
            return;
        }
    }

    return (
        <>
            <form onSubmit={() => handleSubmit()}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={usernameIn}
                    onChange={e => setUsernameIn(e.target.value)}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={passwordIn}
                    onChange={e => setPasswordIn(e.target.value)}
                />

                <button type="submit">Log In</button>
            </form>
        </>
    )
}

export default LoginPage;
