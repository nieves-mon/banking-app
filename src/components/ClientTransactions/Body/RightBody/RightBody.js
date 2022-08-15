import React, { useContext } from "react"
import "./RightBody.css"
import Card from "./Card/Card.js"
import { LoggedInUserContext } from "../../../../contexts/LoggedInUserContext"

const RightBody = ({currUser}) => {
    const [loggedInUser] = useContext(LoggedInUserContext);
    const current = new Date();
    const month = current.getMonth();
    const year = current.getFullYear();
    const userYear = parseInt(currUser.history[0].date.slice(0, 4));
    const userMonth = parseInt(currUser.history[0].date.slice(5, 7));

    const checkActivity = () => {
        if((month + year) - (userMonth + userYear) > 6){
            return <div className="cardDetailActual">Inactive</div>
        } else {
            return <div className="cardDetailActual">Active</div>
        }
    }

    return (
        <div>
            {loggedInUser.name === currUser.name ? <div className="myCard">My Card</div> : <div className="myCard">{currUser.name}'s Card</div>}
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
