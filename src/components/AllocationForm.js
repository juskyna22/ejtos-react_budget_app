/*In AllocationForm.js you will be creating an expense object, containing the name and the cost. This is what will get dispatched as the payload, and 
what you’ll use to update the state.*/

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
/*added Location to the use context hook*/
const AllocationForm = (props) => {
    const { dispatch,remaining, Location  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };
/*Tast 4 add currecncy prefix to Change Allocation text box, added a line of code below  <span>: £ </span>, 
replaced £ with Location use context hook*/
    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value="HR" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
                  </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                  </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>
        

        


                 
 
                  
                <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                   <label className="input-group-text" class='bg-info'>{Location}
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setCost(event.target.value)}>
                    </input>
                    </label>
                </div>
                
                    
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save

                    </button>
                </div>
            </div>

        </div>
    );
};

export default AllocationForm;
/*Here, you are adding form tags, adding a label/input for name, cost and action field, and adding values for various departments.*/
 /*</div>                   <form action="/action_page.php">
    <div class="input-group mb-3">
      <span class="input-group-text">@</span>
      <input type="text" class="form-control" placeholder="Username" name="usrname">
    </div>*/
