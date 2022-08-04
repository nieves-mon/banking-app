import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
      <div>
        <nav>
          <ul>
            <Link to="/deposit">
              <li>Deposit</li>
            </Link>

            <Link to="/withdraw">
              <li>Withdraw</li>
            </Link>

            <Link to="/transfer">
              <li>Transfer</li>
            </Link>
          </ul>
        </nav>
      </div>
  );
}

function Deposit() {
  return <h2>Deposit</h2>;
}

/*
function Withdraw() {
  return <h2>Withdraw</h2>;
}

function Transfer() {
  return <h2>Transfer</h2>;
}
*/
