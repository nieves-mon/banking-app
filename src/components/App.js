import React, { useState } from "react";
import Header from "./ClientTransactions/Header/Header"
import Body from "./ClientTransactions/Body/Body"
import LoginPage from "./LoginPage/LoginPage";
import { UsersProvider } from "../contexts/UsersContext";
import { LoggedInUserProvider } from "../contexts/LoggedInUserContext";
import { EmployeesProvider } from "../contexts/EmployeesContext";

const App = () => {
    const [loggedIn, setloggedIn] = useState(sessionStorage.getItem("loggedIn") === null ? false : JSON.parse(sessionStorage.getItem("loggedIn")));

    const handleLogIn = () => {
        sessionStorage.setItem("loggedIn", JSON.stringify(!loggedIn));
        setloggedIn(JSON.parse(sessionStorage.getItem("loggedIn")));
    }

    return (
        <EmployeesProvider>
            <UsersProvider>
                <LoggedInUserProvider>
                    {loggedIn === true ?
                        <>
                            <Header />
                            <Body  handleLogIn={handleLogIn} />
                        </>
                    : <LoginPage handleLogIn={handleLogIn} />
                    }
                </LoggedInUserProvider>
            </UsersProvider>
        </EmployeesProvider>
    )
}

export default App;
