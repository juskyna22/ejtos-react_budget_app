import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyType = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CurrencyType',
                payload: val,
            })
    }
  
    return (
        <div className='alert alert-secondary'> CurrencyType {
      <select name="CurrencyType" id="CurrencyType" onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};

export default CurrencyType;
