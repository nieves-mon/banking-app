import React, {useState, createContext} from "react";

export const EmployeesContext = createContext();

export const EmployeesProvider = ({children}) => {
    const [employees, setEmployees] = useState(
        JSON.parse(localStorage.getItem("employees")) === null ? [{"name": "admin", "email": "admin@alkansya.com", "password": "12345678", "userType": "employee"}]
        : JSON.parse(localStorage.getItem("employees"))
    );

    const updateEmployees = (newEmployees) => {
        localStorage.setItem("employees", JSON.stringify(newEmployees));
        setEmployees(newEmployees);
        return;
    }

     return (
        <EmployeesContext.Provider value={[employees, updateEmployees]}>
            {children}
        </EmployeesContext.Provider>
     )
}
