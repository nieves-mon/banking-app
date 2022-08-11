import React, { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider  = ({ children }) => {
    const [users, setUsers] = useState(
        localStorage.getItem("users") === null ? [] : JSON.parse(localStorage.getItem("users"))
    );

    const [currUser, setCurrUser] = useState(
        localStorage.getItem("currentUser") === null ? {} : JSON.parse(localStorage.getItem("currentUser"))
    );

    const updateUsers = (newUsers) => {
        localStorage.setItem("users", JSON.stringify(newUsers));
        setUsers(newUsers);
        return;
    }

    const changeCurrUser = (user) => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        setCurrUser(user);
        return;
    }

    return (
        <UsersContext.Provider value={[users, updateUsers, currUser, changeCurrUser]}>
            {children}
        </UsersContext.Provider>
    );
}
