import React from "react"
import "./Card.css"

const Card = () => {
    return (
        <div className="cardContainer">
            <div className="logoContainer">Logo</div>
            <div className="chip">
                <div className="chipLine"></div>
                <div className="chipLine"></div>
                <div className="chipLine"></div>
                <div className="chipLine"></div>
                <div className="chipMiddle"></div>
            </div>
            <div className="emboss cardNumber">1234 5678 1234 5678</div>
            <div className="emboss cardExpiry">12/28</div>
            <div className="emboss cardUser">A A A</div>
            <div className="mastercardLogo">
                <div className="mcRed"></div>
                <div className="mcYellow"></div>
            </div>
            <div className="design1"></div>
            <div className="design2"></div>
        </div>
    )
}

export default Card
