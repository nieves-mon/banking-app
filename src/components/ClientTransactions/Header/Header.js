import React from "react"
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="leftContainer">
                <i className="fa-solid fa-piggy-bank"></i>
                alkansya
            </div>
            <div className="middleContainer">
                {/* <div className="initialContainer">
                    <div className="initials">R</div>
                </div>
                <div className="greeting">Hello,</div> */}
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
