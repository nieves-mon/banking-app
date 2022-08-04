import React from "react"
import "./Logout.css"

const Logout = ({handleLogIn}) => {
    return (
        <div className="logoutContainer">
            <div className="linkNavbar" onClick={handleLogIn}>Log Out</div>
        </div>
    )
}

export default Logout
