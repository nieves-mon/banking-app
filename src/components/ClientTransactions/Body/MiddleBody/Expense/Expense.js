import React, {useContext, useEffect, useState} from "react";
import { PageContext } from "../../../../../contexts/PageContext";
import { UsersContext } from "../../../../../contexts/UsersContext";
import CustomPieChart from "../CustomPieChart/CustomPieChart";
import "./Expense.css";

const Expense = ({cost, setCost, updateBalance}) => {
    const current = new Date();
    const day = current.getDate() < 10 ? `0${current.getDate()}` : current.getDate();
    const month = (current.getMonth() + 1) < 10 ? `0${current.getMonth() + 1}` : current.getMonth() + 1;
    const date = `${current.getFullYear()}-${month}-${day}`;
    const [users, updateUsers, currUser, changeCurrUser] = useContext(UsersContext);
    const [page, setPage] = useContext(PageContext);
    const [category, setCategory] = useState("Rent");
    const [desc, setDesc] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [newDate, setNewDate] = useState("");
    const [newCost, setNewCost] = useState("");
    const [newCat, setNewCat] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [index, setIndex] = useState(0);

    const togglePopup = (id = null) => {
        if(id !== null){
            setIndex(id);
            setNewDate(currUser.expenses[id].date);
            setNewCost(currUser.expenses[id].cost);
            setNewCat(currUser.expenses[id].category);
            setNewDesc(currUser.expenses[id].desc);
        }
        setIsOpen(!isOpen);
    }

    const addExpense = () => {
        const tempUsers = JSON.parse(localStorage.getItem("users"));
        const idx = tempUsers.findIndex(user => user.name === currUser.name);
        tempUsers[idx].expenses.unshift({"id": Date.now(), "date": date, "desc": desc, "category": category, "cost": cost});
        updateUsers([...tempUsers]);
        changeCurrUser(tempUsers[idx]);
        updateBalance(tempUsers[idx], "Expense", cost, category);
        return;
    }

    const handleConfirm = (e) => {
        e.preventDefault();
        if(cost.length === 0 || cost <= 0) {
            return;
        }
        addExpense();
        setDesc("");
        setCost("");
    }

    const totalCost = (catName) => {
        let total = 0;

        for(let i = 0; i < currUser.expenses.length; i++) {
            if(currUser.expenses[i].category === catName) {
                total += parseFloat(currUser.expenses[i].cost);
            }
        }

        return total;
    }

    const categoryCount = [
        {"name": "Rent", "value": totalCost("Rent")},
        {"name": "Food", "value": totalCost("Food")},
        {"name": "Transportation", "value": totalCost("Transportation")},
        {"name": "Mortgage", "value": totalCost("Mortgage")},
        {"name": "Utilities", "value": totalCost("Utilities")},
        {"name": "Entertainment", "value": totalCost("Entertainment")}
    ];

    const deleteExpense = (expense) => {
        const tempUsers = JSON.parse(localStorage.getItem("users"));
        const userIdx = tempUsers.findIndex(user => user.name === currUser.name);
        const tranIdx = tempUsers[userIdx].history.findIndex(obj => obj.amount === expense.cost && obj.date === expense.date && obj.type === `Expense: ${expense.category}`);
        const expIdx = tempUsers[userIdx].expenses.findIndex(obj => obj.id === expense.id);

        tempUsers[userIdx].balance = parseFloat(tempUsers[userIdx].balance) + parseFloat(expense.cost);
        tempUsers[userIdx].expenses.splice(expIdx, 1);
        tempUsers[userIdx].history.splice(tranIdx, 1);

        updateBalance(tempUsers[userIdx].balance);
        updateUsers([...tempUsers])
        changeCurrUser(tempUsers[userIdx]);
    }

    const updateExpense = (e, expense) => {
        e.preventDefault();

        const tempUsers = JSON.parse(localStorage.getItem("users"));
        const idx = tempUsers.findIndex(user => user.name === currUser.name);
        const tranIdx = tempUsers[idx].history.findIndex(obj => obj.amount === expense.cost && obj.date === expense.date && obj.type === `Expense: ${expense.category}`);
        const expIdx = tempUsers[idx].expenses.findIndex(obj => obj.id === expense.id);

        console.log(idx, tranIdx, expIdx);

        const updatedExpense = {"id": expense.id, "date": newDate, "category": newCat, "cost": newCost, "desc": newDesc};
        const updatedTransaction = {"date": newDate, "type": `Expense: ${newCat}`, "amount": newCost};

        let newTranIdx = newDate === tempUsers[idx].history[tranIdx].date ? tranIdx : false;
        let newExpIdx = newDate === tempUsers[idx].expenses[expIdx].date ? expIdx : false;

        tempUsers[idx].expenses.splice(expIdx, 1);
        tempUsers[idx].history.splice(tranIdx, 1);

        for(let i = 0; i < tempUsers[idx].history.length; i++) {
            if(newTranIdx !== false)
                break;

            if(newDate >= tempUsers[idx].history[i].date)
                newTranIdx = i;
        }

        for(let i = 0; i < tempUsers[idx].expenses.length; i++) {
            if(newExpIdx !== false)
                break;

            if(newDate >= tempUsers[idx].expenses[i].date)
                newExpIdx = i;
        }

        if(newExpIdx === false) {
            tempUsers[idx].expenses.push(updatedExpense);
        } else {
            tempUsers[idx].expenses.splice(newExpIdx, 0, updatedExpense);
        }

        if(newTranIdx === false) {
            tempUsers[idx].history.push(updatedTransaction);
        } else {
            tempUsers[idx].history.splice(newTranIdx, 0, updatedTransaction);
        }

        tempUsers[idx].balance = parseFloat(tempUsers[idx].balance) + parseFloat(expense.cost);
        tempUsers[idx].balance = parseFloat(tempUsers[idx].balance) - parseFloat(newCost);

        updateBalance(tempUsers[idx].balance);
        updateUsers([...tempUsers])
        changeCurrUser(tempUsers[idx]);
        togglePopup();
    }

    useEffect(() => {
        setPage("expense");
    }, [setPage]);

    return (
        <div className="transactionContainer add-expense-div">
            <form className="transaction" onSubmit={e => handleConfirm(e)}>
                <h4 className="form-header">Add Expense</h4>
                <div className="row-container">
                    <div className="inputContainer">
                        <label htmlFor="cost">Cost</label>
                            <input
                                required
                                id="cost"
                                className="inputValue"
                                name="expense-cost"
                                type="number"
                                min="0.0"
                                step="any"
                                value={cost}
                                onChange={e => setCost(e.target.value)}
                            />
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="type">Type</label>
                        <select>
                            {currUser.categories.map(cat => {
                                return <option key={cat} value={cat} onClick={() => setCategory(cat)}>{cat}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="inputContainer">
                    <label htmlFor="desc">Description</label>
                    <textarea
                        id="desc"
                        name="expense-desc"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    />
                </div>
                <div className="submitButton">
                    <button className="button expense-btn" onClick={e => handleConfirm(e)}>Add Expense</button>
                </div>
            </form>

            <div className="expense-chart">
                <CustomPieChart data={categoryCount}/>
            </div>

            <div className="expense-list-div">
                <table className="expense-list">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Cost</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currUser.expenses.map((expense, i) => {
                            return(
                                <tr key={`expense${i}`} className="expense-row">
                                    <td className="expense-date">{expense.date}</td>
                                    <td className="expense-desc">{expense.desc}</td>
                                    <td className="expense-category">{expense.category}</td>
                                    <td className="expense-cost">₱ {parseFloat(expense.cost).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                                    <td>
                                        <div className="expense-actions">
                                            <i className="fa-solid fa-pen-to-square"
                                                onClick={e => {
                                                    togglePopup(i);
                                                }}></i>
                                            <i className="fa-solid fa-trash-can" onClick={e => deleteExpense(expense)}></i>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            {isOpen && <div className="update-popup-div">
                <div className="overlay" onClick={e => togglePopup()}></div>
                <form className="update-form">
                    <i className="fa-solid fa-xmark" onClick={e => togglePopup()}></i>

                    <div className="update-date">
                        <label>Date</label>
                        <input
                            type="date"
                            value={newDate}
                            onChange={e => setNewDate(e.target.value)}
                        />
                    </div>

                    <div className="update-cost">
                        <label>Cost</label>
                        <input
                            type="number"
                            value={newCost}
                            onChange={e => setNewCost(e.target.value)}
                        />
                    </div>

                    <div className="update-type">
                        <label>Type</label>
                        <select value={newCat} onChange={e => setNewCat(e.target.value)}>
                            {currUser.categories.map(cat => {
                                return <option key={cat} value={cat}>{cat}</option>
                            })}
                        </select>
                    </div>

                    <div className="update-desc">
                        <label>Description</label>
                        <textarea
                            value={newDesc}
                            onChange={e => setNewDesc(e.target.value)}
                        />
                    </div>

                    <button className="button" onClick={e => updateExpense(e, currUser.expenses[index])}>Update Expense</button>
                </form>
            </div>}
        </div>
    )
}

export default Expense;
