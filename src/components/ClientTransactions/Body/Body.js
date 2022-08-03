import React, {useState} from "react"
import { Routes, Route } from "react-router-dom"
import UserList from "../../UserList/UserList"
import Dashboard from "./MiddleBody/Dashboard/Dashboard"

const Body = () => {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) === null ? [] : JSON.parse(localStorage.getItem("users"))
    );

    if(localStorage.getItem("currentUser") === null) {
        localStorage.setItem("currentUser", JSON.stringify(users[0]));
    }

    const [currUser, setCurrUser] = useState(JSON.parse(localStorage.getItem("currentUser")));

    return (
        <Routes>
            <Route path="/UserList" element={<UserList users={users} setUsers={setUsers} currUser={currUser} setCurrUser={setCurrUser} />} />

            <Route path="/Dashboard/*" element={<Dashboard currUser={currUser}/>}/>
        </Routes>
    )
}

export default Body
