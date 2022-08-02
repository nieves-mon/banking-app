import React from "react"
import "./Header.css"

const Header = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div className="headerContainer">
            <div className="leftContainer">alkansya</div>
            <div className="middleContainer">
                <div>
                    <div>Date</div>
                    <div>{date}</div>
                </div>
            </div>
            <div className="rightContainer">
                <div>
                    Select User
                    <i class="fa-solid fa-users"></i>
                </div>
            </div>
        </div>
    )
}

export default Header
