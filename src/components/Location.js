/*In Location.js, you are importing AppContext and adding changeLication class to change the location 
along with its currencies. 
When you change the Location, currencies will be updated at all the required places.*/

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
  /*  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
      Dropdown button
    </button>*/
    return (
     <div className='mt-3'>  

      <select name='location' class='custom-select bg-primary text-white'  onChange={event=>changeLocation(event.target.value)}>
        <option selected>Currency (£ Pound)</option>
        <option value="$"> $ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      
    </div>
    );
};

export default Location;
