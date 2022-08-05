import React from "react";
import Navbar from "../../LeftBody/Navbar/Navbar";
import Logout from "../../LeftBody/Logout/Logout";
import Transactions from "../Transactions/Transactions";
import RightBody from "../../RightBody/RightBody";
import "./Dashboard.css"

const Dashboard = ({users, updateUsers, currUser, changeCurrUser, handleLogIn}) => {
    return (
        <div className="bodyContainer">
            <div className="leftBodyContainer">
                <Navbar />
                <Logout handleLogIn={handleLogIn} />
            </div>
            <div className="middleBodyContainer">
                <Transactions users={users} updateUsers={updateUsers} currUser={currUser} changeCurrUser={changeCurrUser} />
            </div>
            <div className="rightBodyContainer">
                <RightBody />
            </div>
        </div>
    )
}

export default Dashboard;
