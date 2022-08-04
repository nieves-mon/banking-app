import React, { useState }from "react";
import "./LoginPage.css"

const LoginPage = ({handleLogIn}) => {
    const [usernameIn, setUsernameIn] = useState("");
    const [passwordIn, setPasswordIn] = useState("");
    const [unValidity, setunValidity] = useState(true);
    const [pwValidity, setpwValidity] = useState(true);

    const isValidLogin = () => {
        if(usernameIn.trim() === "admin" && passwordIn === "12345678") {
            return true;
        }

        if(usernameIn.trim() !== "admin") {
            setunValidity(false);
        }

        if(passwordIn !== "12345678") {
            setpwValidity(false);
        }
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isValidLogin()) {
            return;
        }
        handleLogIn();
    }

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={(e) => {handleSubmit(e)}}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={usernameIn}
                        onChange={e => setUsernameIn(e.target.value)}
                    />
                    {!unValidity && <div className="invalid">Username does not exist</div>}
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordIn}
                        onChange={e => setPasswordIn(e.target.value)}
                    />
                    {!pwValidity && <div className="invalid">Incorrect Password</div>}
                </div>

                <button className="login-btn" type="Submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginPage;