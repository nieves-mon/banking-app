import React, { useState } from "react";
import LeftContainer from "./LeftContainer/LeftContainer";
import MainContainer from "./MainContainer/MainContainer";

const App = () => {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) === null ? [] : JSON.parse(localStorage.getItem("users"))
    );

    return (
        // <div>
        //     <Header />
        //     <Body />
        <div className="grid">
            <LeftContainer />
            <MainContainer users={users} setUsers={setUsers} />
        </div>
    )
}

export default App;
