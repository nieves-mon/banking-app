import React, { useState }from "react";
import { Link } from "react-router-dom";
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
        if(isValidLogin()) {
            handleLogIn();
        }
    }

    return (
        <div className="login-page">
            <div className="login-logo">
                <i className="fa-solid fa-piggy-bank"></i>
                alkansya
            </div>
            <form className="login-form" onSubmit={e => document.getElementsByClassName("login-link").click()}>
                <div className="login-div">
                    <label htmlFor="username">Username (admin)</label>
                    <input
                        type="text"
                        id="username"
                        value={usernameIn}
                        onChange={e => setUsernameIn(e.target.value)}
                    />
                    {!unValidity && <div className="invalid">Username does not exist</div>}
                </div>

                <div className="login-div">
                    <label htmlFor="password">Password (12345678)</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordIn}
                        onChange={e => setPasswordIn(e.target.value)}
                    />
                    {!pwValidity && <div className="invalid">Incorrect Password</div>}
                </div>

                <Link to="../Dashboard/history" className="login-link">
                    <button className="login-btn" onClick={e => handleSubmit(e)}>Log In</button>
                </Link>
            </form>
        </div>
    )
}

export default LoginPage;
