import React, { useState } from "react";
import Header from "./ClientTransactions/Header/Header"
import Body from "./ClientTransactions/Body/Body"
import LoginPage from "./LoginPage/LoginPage";

const App = () => {
    const [loggedIn, setloggedIn] = useState(JSON.parse(sessionStorage.getItem("loggedIn")));

    const handleLogIn = () => {
        sessionStorage.setItem("loggedIn", JSON.stringify(!loggedIn));
        setloggedIn(JSON.parse(sessionStorage.getItem("loggedIn")));
    }

    return (
        <>
            {loggedIn === true ?
                <>
                    <Header />
                    <Body  handleLogIn={handleLogIn} />
                </>
            : <LoginPage handleLogIn={handleLogIn} />
            }
        </>
    )
}

export default App;
