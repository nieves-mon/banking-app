import React from "react"
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div className="headerContainer">
            <div className="leftContainer">
                <i className="fa-solid fa-piggy-bank"></i>
                alkansya
            </div>
            <div className="middleContainer">
                <Link to="/UserList">
                    Change User
                    <i className="fa-solid fa-users"></i>
                </Link>
            </div>
            <div className="rightContainer">
                <div className="initialContainer">
                    <div className="initials">R</div>
                </div>
                <div className="greeting">Hello,</div>
                <div><img src="...../public/icons/deposit.svg"></img></div>
            </div>
        </div>
    )
}

export default Header
