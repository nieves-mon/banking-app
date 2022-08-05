import React, { useState } from "react";
import Navbar from "../../LeftBody/Navbar/Navbar";
import Logout from "../../LeftBody/Logout/Logout";
import Transactions from "../Transactions/Transactions";
import RightBody from "../../RightBody/RightBody";
import "./Dashboard.css"

const Dashboard = ({users, updateUsers, currUser, changeCurrUser, handleLogIn}) => {
    const [page, setPage]  = useState("deposit");

    const loadDemo = () => {
        const demoUsers = [
            {}
        ];
        updateUsers(demoUsers);
    }

    return (
        <div className="bodyContainer">
            {users.length > 0 ?
                <>
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
                </>
            :   <div className="no-users">
                    <div className="no-users-text">No Users</div>
                    <p>Click the button below to load demo data</p>
                    <button >Load Demo Data</button>
                </div>
            }
        </div>
    )
}

export default Dashboard;
