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
                <div>
                    <div>Date</div>
                    <div>{date}</div>
                </div>
            </div>
            <div className="rightContainer">
                <Link to="/UserList">
                    Change User
                    <i className="fa-solid fa-users"></i>
                </Link>
            </div>
        </div>
    )
}

export default Header
