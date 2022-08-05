import React from "react"
import "./Header.css"

const Header = () => {

    return (
        <div className="headerContainer">
            <div className="leftContainer">
                <div className="initials"><i className="fa-solid fa-piggy-bank"></i></div>
                <div className="initials">alkansya</div>
            </div>
            <div className="middleContainer"></div>
            <div className="rightContainer">
                <div className="initialContainer">
                    <div className="initials">A</div>
                </div>
                <div className="greeting">Name</div>
            </div>
        </div>
    )
}

export default Header