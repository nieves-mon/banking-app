import React, {useContext, useEffect, useState} from "react";
import { PageContext } from "../../../../../contexts/PageContext";
import { UsersContext } from "../../../../../contexts/UsersContext";
import CustomPieChart from "../CustomPieChart/CustomPieChart";
import "./Expense.css";

const Expense = ({cost, setCost, updateBalance}) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [users, updateUsers, currUser, changeCurrUser] = useContext(UsersContext);
    const [page, setPage] = useContext(PageContext);
    const [category, setCategory] = useState("Rent");
    const [desc, setDesc] = useState("");

    const addExpense = () => {
        const tempUsers = JSON.parse(localStorage.getItem("users"));
        const idx = tempUsers.findIndex(user => user.name === currUser.name);
        tempUsers[idx].expenses.unshift({"date": date, "desc": desc, "category": category, "cost": cost});
        updateUsers([...tempUsers]);
        changeCurrUser(tempUsers[idx]);
        updateBalance(tempUsers[idx], "Expense", cost, category);
        return;
    }

    const handleConfirm = (e) => {
        e.preventDefault();
        addExpense();
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
                        </tr>
                    </thead>
                    <tbody>
                        {currUser.expenses.map((expense, i) => {
                            return(
                                <tr key={`expense${i}`} className="expense-row">
                                    <td className="expense-date">{expense.date}</td>
                                    <td className="expense-desc">{expense.desc}</td>
                                    <td className="expense-category">{expense.category}</td>
                                    <td className="expense-cost">₱ {parseFloat(expense.cost)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Expense;
