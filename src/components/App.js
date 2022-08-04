import React, { useState, useEffect } from "react";
import Header from "./ClientTransactions/Header/Header"
import Body from "./ClientTransactions/Body/Body"
import LoginPage from "./LoginPage/LoginPage";

const App = () => {
    const [loggedIn, setloggedIn] = useState("");

    const handleLogIn = () => {
        sessionStorage.setItem("loggedIn", JSON.stringify(!loggedIn));
        setloggedIn(JSON.parse(sessionStorage.getItem("loggedIn")));
    }

    useEffect(() => {
        if(sessionStorage.getItem("loggedIn") === null) {
            sessionStorage.setItem("loggedIn", JSON.stringify(false));
        } else {
            setloggedIn(JSON.parse(sessionStorage.getItem("loggedIn")));
        }
    }, [setloggedIn])

    return (
        <>
            {loggedIn === true ?
                <>
                    <Header />
                    <Body />
                </>
            : <LoginPage setloggedIn={handleLogIn} />
            }
        </>
    )
}

export default App;
