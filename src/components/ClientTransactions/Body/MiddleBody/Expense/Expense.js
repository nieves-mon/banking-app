import React, {useContext, useEffect} from "react";
import { PageContext } from "../../../../../contexts/PageContext";

const Expense = () => {
    const [page, setPage] = useContext(PageContext);

    useEffect(() => {
        setPage("expense");
    }, [setPage]);
}

export default Expense;
