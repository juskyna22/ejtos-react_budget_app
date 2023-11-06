/*imported mdadd and faminus below to add icons in return HTML*/
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { MdAddCircle } from 'react-icons/md';
import { FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    

    };
/*added this to hook the on click event to the context pag*/
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    

    };
/*added decrease allocation button below*/
/*changed button tags to imported react icons increase and decrease, added size and color style atrtributes*/
/*Replaced the £ props.name wirth Location and added context hook above*/
    return (
        <tr>
        <td>{props.name}</td>
        <td>£{Location}{props.cost}</td>
        <td><MdAddCircle size='2.2em' color='green' onClick={event=> increaseAllocation(props.name)}></MdAddCircle></td>
        <td><FaMinusCircle size='2.2em' color='red' onClick={event=> decreaseAllocation(props.name)}></FaMinusCircle></td> 
        <td><TiDelete  size='1.5em'  onClick={handleDeleteExpense}></TiDelete ></td>
        </tr>
    );
};

export default ExpenseItem;
