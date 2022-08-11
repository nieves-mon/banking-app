import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({page}) {
  return (
      <div>
        <nav>
          <div className="linksContainer">
            <Link className={page === "home" ? "links active" : "links"} to="home">
              <div className="linkText">Home</div>
            </Link>
            <Link className={page === "history" ? "links active" : "links"} to="history">
              <div className="linkText">Transactions</div>
            </Link>
            <Link className={page === "deposit" ? "links active" : "links"} to="deposit">
              <div className="linkText">
                  {/* <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="rgb(3 73 144)" fillRule="evenodd" clipRule="evenodd">
                    <path d="M13.033 2v-2l10 3v18l-10 3v-2h-9v-7h1v6h8v-18h-8v7h-1v-8h9zm1 20.656l8-2.4v-16.512l-8-2.4v21.312zm-3.947-10.656l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z"/>
                  </svg> */}
                  Deposit
              </div>
            </Link>
            <Link className={page === "withdraw" ? "links active" : "links"} to="withdraw">
              <div className="linkText">Withdraw</div>
            </Link>
            <Link className={page === "transfer" ? "links active" : "links"} to="transfer">
              <div className="linkText">Transfer</div>
            </Link>
            <Link className={page === "request" ? "links active" : "links"} to="request">
              <div className="linkText">Request</div>
            </Link>
          </div>
        </nav>
      </div>
  );
}
