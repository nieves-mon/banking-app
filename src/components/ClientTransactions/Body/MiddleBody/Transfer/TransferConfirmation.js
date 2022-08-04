import React, { useState } from "react"

import {
    Link
  } from "react-router-dom";

import "./TransferConfirmation.css"


const TransferConfirmation = () => {
    return (
        <div>
            <div>
                <div>
                    <div>Transfer details</div>
                    <div>Edit</div>
                </div>
                <div>
                    <div>You send exactly</div>
                    <div>123</div>
                </div>
                <div>
                    <div>You get</div>
                    <div>123</div>
                </div>
                <div>
                    <div>Balance afterwards</div>
                    <div>123</div>
                </div>
            </div>
            <div>
                <div>
                    <div>Recipient details</div>
                    <div>Change</div>
                </div>
                <div>
                    <div>Name</div>
                    <div>A</div>
                </div>
                <div>
                    <div>Email</div>
                    <div>a@gmail.com</div>
                </div>
                <div>
                    <div>Account number</div>
                    <div>1234</div>
                </div>
            </div>
            <div>
                <div>Reference (optional)</div>
                <div>Type a reference for A</div>
            </div>
            <Link to="/finalTransfer">
                <div>Confirm and send</div>
            </Link>
        </div>        
    )
}

export default TransferConfirmation