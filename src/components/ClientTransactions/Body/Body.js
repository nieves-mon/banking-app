import React from "react"
import { Routes, Route } from "react-router-dom"
import UserList from "../../UserList/UserList"
import Dashboard from "./MiddleBody/Dashboard/Dashboard"
import "./Body.css";
import { PageProvider } from "../../../contexts/PageContext";

const Body = ({handleLogIn}) => {
    return (
        <Routes>
            <Route path="/UserList" element={<UserList/>} />
            <Route path="/Dashboard/*" element={<Dashboard handleLogIn={handleLogIn} />}/>
        </Routes>
    )
}

export default Body
