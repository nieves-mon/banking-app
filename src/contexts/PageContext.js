import React, { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({children}) => {
    const [page, setPage] = useState("deposit");

    return (
        <PageContext.Provider value={[page, setPage]}>
            {children}
        </PageContext.Provider>
    )
}
