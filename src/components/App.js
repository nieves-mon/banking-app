import React, { useState } from "react";
import CreateUser from "./CreateUser/CreateUser";

const App = () => {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) === null ? [] : JSON.parse(localStorage.getItem("users"))
    );

    return (
        <div>
            <CreateUser users={users} setUsers={setUsers}/>
        </div>
    )
}

export default App;
