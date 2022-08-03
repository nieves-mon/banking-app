import React from "react";
import { Link } from "react-router-dom";
import MainNavItem from "./MainNavItem/MainNavItem";

const MainNavBar = () => {
    return (
        <div>
            <Link to="/users">
                <MainNavItem text="Users"/>
            </Link>
        </div>
    )
}

export default MainNavBar;
