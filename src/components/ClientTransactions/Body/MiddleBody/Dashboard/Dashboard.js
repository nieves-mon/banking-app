import React, { useState } from "react";
import Navbar from "../../LeftBody/Navbar/Navbar";
import Logout from "../../LeftBody/Logout/Logout";
import Transactions from "../Transactions/Transactions";
import RightBody from "../../RightBody/RightBody";
import "./Dashboard.css"

const Dashboard = ({users, updateUsers, currUser, changeCurrUser, handleLogIn}) => {
    const [page, setPage]  = useState("deposit");

    return (
        <div className="bodyContainer">
            <div className="leftBodyContainer">
                <Navbar page={page}/>
                <Logout handleLogIn={handleLogIn} />
            </div>
            <div className="middleBodyContainer">
                <Transactions users={users} updateUsers={updateUsers} currUser={currUser} changeCurrUser={changeCurrUser} setPage={setPage}/>
            </div>
            <div className="rightBodyContainer">
                <RightBody currUser={currUser}/>
            </div>
        </div>
    )
}

export default Dashboard;
