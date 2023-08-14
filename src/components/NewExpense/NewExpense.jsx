import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
 
  const[isEditing,setIsEditing]  = useState(false)
  const ExpenseHandler = (enterExpense)=>{
    const ExpenseData = {
      ...enterExpense,
      id : Math.random.toString()
    }
    props.onSave(ExpenseData)
  }
  const startHandling = ()=>{
    setIsEditing(true)
  }
  const stopHandling = ()=>{
    setIsEditing(false)
  }
  
  return (
    <div className='new-expense'>
     {!isEditing && <button onClick={startHandling}>add new expenses</button>}
      {isEditing && <ExpenseForm onSaveExpesese={ExpenseHandler} onCancel={stopHandling}/>}
    </div>
  );
};

export default NewExpense;