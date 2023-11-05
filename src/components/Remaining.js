import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
/*Task 5 currency prefix with next line of code, replaced Euro symbol with Location for Task6*/
const Remaining = () => {
    const { expenses, budget, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
    /*/*Task 5 currency prefix with next line of code, replaced Euro symbol with Location for Task6*/
            <span>Remaining: {Location}{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
