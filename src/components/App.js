import React, { useState } from "react";
import LeftContainer from "./LeftContainer/LeftContainer";
import MainContainer from "./MainContainer/MainContainer";
import Header from "./ClientTransactions/Header/Header"
import Body from "./ClientTransactions/Body/Body"

const App = () => {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) === null ? [] : JSON.parse(localStorage.getItem("users"))
    );

    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

export default App;
