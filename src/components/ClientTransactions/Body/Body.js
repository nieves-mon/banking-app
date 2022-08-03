import React, {useState} from "react"
import { Routes, Route } from "react-router-dom"
import UserList from "../../UserList/UserList"
import Dashboard from "./MiddleBody/Dashboard/Dashboard"

const Body = () => {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) === null ? [] : JSON.parse(localStorage.getItem("users"))
    );

    const [currUser, setCurrUser] = useState(users[0]);

    return (
        <Routes>
            <Route path="/UserList" element={<UserList users={users} setUsers={setUsers} />} />

            <Route path="/Dashboard/*" element={<Dashboard />}/>
        </Routes>
    )
}

export default Body
