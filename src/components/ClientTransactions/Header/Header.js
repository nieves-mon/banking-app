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
                <div>Currency</div>
            </div>
            <div className="rightContainer">
                <div>Hello,</div>
                <div>notification icon</div>
            </div>
        </div>
    )
}

export default Header