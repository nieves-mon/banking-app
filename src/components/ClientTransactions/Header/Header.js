import React from "react"
import "./Header.css"

const Header = () => {

    return (
        <div className="headerContainer">
            <div className="leftContainer">alkansya</div>
            <div className="middleContainer"></div>
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