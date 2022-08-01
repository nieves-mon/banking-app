import React from "react";
import CreateUser from "../CreateUser/CreateUser";

const MainContainer = ({users}, {setUsers}) => {
    return (
        <div className="main-container">
            <h1>Hello</h1>
            <CreateUser users={users} setUsers={setUsers}/>
        </div>
    )
}

export default MainContainer;
