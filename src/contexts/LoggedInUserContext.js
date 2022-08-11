import React, {useState, createContext} from "react";

export const LoggedInUserContext = createContext();

export const LoggedInUserProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState(
        localStorage.getItem("loggedInUser") === null ? {} : JSON.parse(localStorage.getItem("loggedInUser"))
    );

    const updateLoggedInUser = (user) => {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")));
    }

    return (
        <LoggedInUserContext.Provider value={[loggedInUser, updateLoggedInUser]}>
            {children}
        </LoggedInUserContext.Provider>
    )
}
