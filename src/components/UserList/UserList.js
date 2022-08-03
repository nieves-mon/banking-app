import React , { useState } from "react";
import { Link } from "react-router-dom";
import CreateUser from "../CreateUser/CreateUser";
import "./UserList.css"

const UserList = ({users}, {setUsers}) => {
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
                    <CreateUser users={users} setUsers={setUsers} togglePopup={togglePopup}/>
                    <div className="overlay"></div>
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
                        <i class="fa-solid fa-circle-arrow-left"></i> Back
                    </Link>
                </div>

                <button className="create-btn" onClick={togglePopup}>
                    <i className="fa-solid fa-plus"></i>
                    Create New User
                </button>

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
                        {filteredUsers.map((user, i) => {
                            return (
                                <tr key={`user${i}`}>
                                    <td className="id">{i}</td>
                                    <td className="user-name">{user.name}</td>
                                    <td className="user-email">{user.email}</td>
                                    <td className="user-cn">{user.cardNumber}</td>
                                    <td className="user-balance">₱ {user.balance}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList;
