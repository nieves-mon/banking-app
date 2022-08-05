import React, { useState } from "react"
import "./Card.css"

const Card = ({currUser}) => {
    let cardNumber = "";
    let temp = `${currUser.cardNumber}`;

    while(temp.length > 0) {
        if(cardNumber.length > 0) {
            cardNumber += " " + temp.substring(0, 3);
            temp = temp.substring(3);
        } else {
            cardNumber += " " + temp.substring(0, 4);
            temp = temp.substring(4);
        }
    }

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
            <div className="emboss cardNumber">{cardNumber}</div>
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
