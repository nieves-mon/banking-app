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
            {"name": "Ron Swanson",
                "email": "rswanson@email.com",
                "balance": 451865.50,
                "cardNumber": Date.now(),
                "cvc": Math.floor(Math.random() * (999 - 100 + 1) + 100),
                "history": [
                    {"date": "3/9/2022", "type": "Withdraw", "amount": "15500.00"},
                    {"date": "3/1/2022", "type": "Deposit", "amount": "45650.55"},
                    {"date": "2/15/2022", "type": "Transfer From", "amount": "256483.99"},
                    {"date": "2/1/2022", "type": "Deposit", "amount": "142000.00"},
                    {"date": "12/14/2021", "type": "Initial Deposit", "amount": "23230.96"}
                ]
            },
            {"name": "Walter White",
                "email": "heisenberg@email.com",
                "balance": 50123541.89,
                "cardNumber": Date.now(),
                "cvc": Math.floor(Math.random() * (999 - 100 + 1) + 100),
                "history": [
                    {"date": "1/25/2022", "type": "Transfer From Rick Sanchez", "amount": "1490080.00"},
                    {"date": "1/10/2022", "type": "Withdraw", "amount": "15000000.00"},
                    {"date": "12/30/2021", "type": "Deposit", "amount": "600000.00"},
                    {"date": "12/25/2021", "type": "Transfer To Dirk Gently", "amount": "700845.99"},
                    {"date": "11/30/2021", "type": "Initial Deposit", "amount": "36,512,775.9"}
                ]
            },
            {"name": "Muriel Bagge",
                "email": "murielb@email.com",
                "balance": 87532.54,
                "cardNumber": Date.now(),
                "cvc": Math.floor(Math.random() * (999 - 100 + 1) + 100),
                "history": [
                    {"date": "4/30/2022", "type": "Deposit", "amount": "1500.00"},
                    {"date": "3/15/2022", "type": "Deposit", "amount": "37005.85"},
                    {"date": "2/30/2022", "type": "Withdraw", "amount": "14000.00"},
                    {"date": "12/24/2021", "type": "Deposit", "amount": "25000.00"},
                    {"date": "11/5/2021", "type": "Initial Deposit", "amount": "38026.69"}
                ]
            },
            {"name": "Dirk Gently",
                "email": "dirk@email.com",
                "balance": 1548325.56,
                "cardNumber": Date.now(),
                "cvc": Math.floor(Math.random() * (999 - 100 + 1) + 100),
                "history": [
                    {"date": "5/1/2022", "type": "Withdraw", "amount": "500850.25"},
                    {"date": "3/6/2022", "type": "Withdraw", "amount": "450000.00"},
                    {"date": "1/3/2022", "type": "Withdraw", "amount": "230000.00"},
                    {"date": "12/25/2021", "type": "Deposit", "amount": "648500.50"},
                    {"date": "12/10/2021", "type": "Initial Deposit", "amount": "1015975.81"}
                ]
            },
            {"name": "Rick Sanchez",
                "email": "pickle_rick@email.com",
                "balance": 54125485.37,
                "cardNumber": Date.now(),
                "cvc": Math.floor(Math.random() * (999 - 100 + 1) + 100),
                "history": [
                    {"date": "1/25/2022", "type": "Transfer To Walter White", "amount": "560000.00"},
                    {"date": "1/16/2022", "type": "Deposit", "amount": "10450000.55"},
                    {"date": "12/29/2021", "type": "Withdraw", "amount": "640850.00"},
                    {"date": "12/14/2021", "type": "Deposit", "amount": "12830000.00"},
                    {"date": "10/20/2021", "type": "Initial Deposit", "amount": "32046334.82"}
                ]
            }
        ];
        console.log(demoUsers);
        updateUsers(demoUsers);
        changeCurrUser(demoUsers[4])
    }

    const handleClick = (e) => {
        e.preventDefault();
        loadDemo();
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
                    <button type="submit" onClick={e => handleClick(e)}>Load Demo Data</button>
                </div>
            }
        </div>
    )
}

export default Dashboard;
