import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoggedInUserContext } from "../../../../../contexts/LoggedInUserContext";
import { PageContext } from "../../../../../contexts/PageContext";
import "./Navbar.css";

export default function Navbar() {
  const [loggedInUser] = useContext(LoggedInUserContext);
  const [page] = useContext(PageContext);
  return (
      <div>
        <nav>
          <div className="linksContainer">
            {loggedInUser.userType === 'client' &&
            <Link className={page === "home" ? "links active" : "links"} to="home">
              <div className="linkText">Home</div>
            </Link>}

            <Link className={page === "history" ? "links active" : "links"} to="history">
              <div className="linkText">Transactions</div>
            </Link>

            {loggedInUser.userType === "client" &&
            <Link className={page === "expense" ? "links active" : "links"} to="expense">
              <div className="linkText">Expense</div>
            </Link>}

            <Link className={page === "deposit" ? "links active" : "links"} to="deposit">
              <div className="linkText">Deposit</div>
            </Link>

            <Link className={page === "withdraw" ? "links active" : "links"} to="withdraw">
              <div className="linkText">Withdraw</div>
            </Link>

            <Link className={page === "transfer" ? "links active" : "links"} to="transfer">
              <div className="linkText">Transfer</div>
            </Link>

            {loggedInUser.userType === "client" &&
            <Link className={page === "request" ? "links active" : "links"} to="request">
              <div className="linkText">Request</div>
            </Link>}
          </div>
        </nav>
      </div>
  );
}
