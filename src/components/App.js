import React, { useState } from "react";
import Header from './ClientTransactions/Header/Header.js'
import Body from './ClientTransactions/Body/Body.js'
// import CreateUser from "./CreateUser/CreateUser";

const App = () => {
    /*
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) === null ? [] : JSON.parse(localStorage.getItem("users"))
    );
    */

    return (
        <div>
            <Header />
            <Body />
        </div>
        /*             
            <CreateUser users={users} setUsers={setUsers}/>
        </div>
        */
    )
}

export default App;
