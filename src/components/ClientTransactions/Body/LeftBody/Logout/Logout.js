import React from "react"
import "./Logout.css"

const Logout = ({handleLogIn}) => {
    return (
        <div className="logoutContainer">
            <div className="links">
                <div className="linkText" onClick={handleLogIn}>Log Out</div>
            </div>
        </div>
    )
}

export default Logout
