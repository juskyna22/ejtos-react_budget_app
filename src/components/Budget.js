/*In Budget.js you will be adding text and value for your budget. You will be importing app context and the useContext hook, and pass your AppContext to it 
- this is how a component connects to the context in order to get values from global state.*/

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
/*added Location to the const { budget, Location } = useContext(AppContext);*/
const Budget = () => {
    const { budget, Location } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        /*Task 5 currency prefix with next line of code, replaced Euro symbol with Location for Task6*/
<div className='alert alert-secondary'>

        
<span> Budget:{Location}</span>
<input type="number" min="0" max="20000" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

/*In the above code snippet we are using the useState hook to create a state variable called newBudget and initialize it with the current value of budget. 

We are also defining a function called handleBudgetChange that updates the value of newBudget when the user changes the value of the input field.

We are then setting the value attribute of the input field to newBudget and adding an onChange event listener that calls handleBudgetChange when 
the user changes the value of the input field.

Here, you are using the Bootstrap Alert classes to give a nice gray background by adding some text and hard coding a value.
*/

/*next go to src/App.js and paste the following code to make the Budget Button:

                // Budget component
                    <div className='col-sm'>
                        <Budget />
                    </div>

                    */
