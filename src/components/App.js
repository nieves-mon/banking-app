import React, { useState } from "react";
import Header from "./ClientTransactions/Header/Header"
import Body from "./ClientTransactions/Body/Body"
import LoginPage from "./LoginPage/LoginPage";

const App = () => {
    const [loggedIn, setloggedIn] = useState(false);

    return (
        <>
            {loggedIn === true ? <><Header /><Body /></> : <LoginPage setloggedIn={setloggedIn} />}
        </>
    )
}

export default App;
