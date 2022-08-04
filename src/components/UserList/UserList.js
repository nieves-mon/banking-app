import React , { useState } from "react";
import { Link } from "react-router-dom";
import CreateUser from "../CreateUser/CreateUser";
import "./UserList.css"

const UserList = ({users, updateUsers, currUser, changeCurrUser}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchInput.toLowerCase()));

    return (
        <div className="user-popup-div">
            {isOpen &&
                <div className="popup-overlay-div">
                    <CreateUser users={users} updateUsers={updateUsers} changeCurrUser={changeCurrUser} togglePopup={togglePopup}/>
                    <div className="overlay" onClick={togglePopup}></div>
                </div>
            }
            <div className="user-list-div">
                <div className="user-list-header">
                    <div className="user-list-header-left">
                        <h3 className="user-list-title">Alkansya Users</h3>
                        <input
                            className="searchbar"
                            type="text"
                            value={searchInput}
                            placeholder="Search by name"
                            onChange={e => setSearchInput(e.target.value)}
                        />
                    </div>

                    <Link to="/Dashboard" className="user-list-back">
                        <i className="fa-solid fa-circle-arrow-left"></i> Back
                    </Link>
                </div>

                <button className="create-btn" onClick={togglePopup}>
                    <i className="fa-solid fa-plus"></i>
                    Create New User
                </button>

                {currUser === null ? <h4 className="selected-user">No Selected User</h4> : <h4 className="selected-user">Selected User: {currUser.name}</h4>}

                <table className="user-table">
                    <thead>
                        <tr>
                            <th className="id">ID</th>
                            <th className="user-name">Name</th>
                            <th className="user-email">Email</th>
                            <th className="user-cn">Card Number</th>
                            <th className="user-balance">Balance</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredUsers.length > 0 ? filteredUsers.map((user, i) => {
                            return (
                                <tr
                                    key={`user${i}`}
                                    className={user.name === currUser.name ? "selected user-row" : "user-row"}
                                    onClick={e => {
                                        changeCurrUser(user);
                                    }}
                                >
                                    <td className="id">{i}</td>
                                    <td className="user-name">{user.name}</td>
                                    <td className="user-email">{user.email}</td>
                                    <td className="user-cn">{user.cardNumber}</td>
                                    <td className="user-balance">₱ {user.balance}</td>
                                </tr>
                            )
                        }) :
                            <tr className="no-match">
                                <td className="no-match-text" colSpan="5">No Users Found</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList;
