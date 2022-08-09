import React from "react"
import "./RightBody.css"
import Card from "./Card/Card.js"

const RightBody = ({currUser}) => {
    const current = new Date();
    const month = current.getMonth();
    const year = current.getFullYear();
    const userYear = parseInt(currUser.history[0].date.slice(currUser.history[0].date.length - 4, currUser.history[0].date.length));
    const userMonth = parseInt(currUser.history[0].date.charAt(0));

    const checkActivity = () => {
        if((month + year) - (userMonth + userYear) > 6){
            return <div className="cardDetailActual">Inactive</div>
        } else {
            return <div className="cardDetailActual">Active</div>
        }
    }

    return (
        <div>
            <div className="myCard">{currUser.name}'s Card</div>
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
                    {checkActivity()}
                </div>
                <div className="cardDetails">
                    <div className="cardDetailLabel">Currency</div>
                    <div className="cardDetailActual">PHP</div>
                </div>
                <div className="cardDetails">
                    <div className="cardDetailLabel">Balance</div>
                    <div className="cardDetailActual">₱ {parseFloat(currUser.balance).toLocaleString(undefined, {maximumFractionDigits:2})}</div>
                </div>
            </div>
        </div>
    )
}

export default RightBody
