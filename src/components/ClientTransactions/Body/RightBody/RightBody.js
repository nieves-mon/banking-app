import React from "react"
import "./RightBody.css"
import Card from "./Card/Card.js"

const RightBody = ({currUser}) => {
    return (
        <div>
            <div className="myCard">MY CARD</div>
            <div>
                <Card currUser={currUser}/>
            </div>
            <div className="cardInfo">CARD INFO</div>
            <div className="cardDetailsContainer">
                <div className="cardDetails">
                    <div className="cardDetailLabel">Card Number</div>
                    <div className="cardDetailActual">{currUser.cardNumber}</div>
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
                    <div className="cardDetailActual">{currUser.balance}</div>
                </div>
            </div>
        </div>
    )
}

export default RightBody
