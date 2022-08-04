import React, {useState} from "react"
import { Routes, Route } from "react-router-dom"
import UserList from "../../UserList/UserList"
import Dashboard from "./MiddleBody/Dashboard/Dashboard"
import "./Body.css";

const Body = ({handleLogIn}) => {
    const [currUser, setCurrUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) === null ? {} : JSON.parse(localStorage.getItem("currentUser"))
    );
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) === null ? [] : JSON.parse(localStorage.getItem("users"))
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

    const getCurrUser = () => {
        return currUser;
    }

    return (
        <Routes>
            <Route path="/UserList" element={<UserList users={users} updateUsers={updateUsers} currUser={currUser} changeCurrUser={changeCurrUser} />} />

            <Route path="/Dashboard/*" element={<Dashboard handleLogIn={handleLogIn} currUser={currUser}/>}/>
        </Routes>
    )
}

export default Body
