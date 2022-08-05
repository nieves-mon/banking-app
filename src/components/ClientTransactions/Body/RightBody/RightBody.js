import React from "react"
import "./RightBody.css"
import Card from "./Card/Card.js"

const RightBody = () => {
    return (
        <div>
            <div className="myCard">A'S CARD</div>
            <div>
                <Card />
            </div>
            <div className="cardInfo">CARD INFO</div>
            <div className="cardDetailsContainer">
                <div className="cardDetails">
                    <div className="cardDetailLabel">Card Number</div>
                    <div className="cardDetailActual">123</div>
                </div>
                <div className="cardDetails">
                    <div className="cardDetailLabel">Status</div>
                    <div className="cardDetailActual">Active</div>
                </div>
                <div className="cardDetails">
                    <div className="cardDetailLabel">Currency</div>
                    <div className="cardDetailActual">PHP</div>
                </div>
                <div className="cardDetails">
                    <div className="cardDetailLabel">Balance</div>
                    <div className="cardDetailActual">123.00</div>
                </div>
            </div>
        </div>
    )
}

export default RightBody