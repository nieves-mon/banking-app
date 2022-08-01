import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Navbar() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/deposit">Deposit</Link>
            </li>
            <li>
              <Link to="/withdraw">Withdraw</Link>
            </li>
            <li>
              <Link to="/transfer">Transfer</Link>
            </li>
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