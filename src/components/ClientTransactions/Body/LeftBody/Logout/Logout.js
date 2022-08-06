import React from "react"
import "./Logout.css"

const Logout = ({handleLogIn}) => {
    return (
        <div className="logoutContainer" onClick={handleLogIn}>
            <div className="links">
                <div className="linkText">Log Out</div>
            </div>
        </div>
    )
}

export default Logout
