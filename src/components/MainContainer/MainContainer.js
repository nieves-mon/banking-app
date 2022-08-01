import React from "react";
import CreateUser from "../CreateUser/CreateUser";

const MainContainer = ({users}, {setUsers}) => {
    return (
        <div className="main-container">
            <CreateUser users={users} setUsers={setUsers}/>
        </div>
    )
}

export default MainContainer;
