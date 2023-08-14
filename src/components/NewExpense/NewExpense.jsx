import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const ExpenseHandler = (enterExpense)=>{
    const ExpenseData = {
      ...enterExpense,
      id : Math.random.toString()
    }
    props.onSave(ExpenseData)
  }
  
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpesese={ExpenseHandler}/>
    </div>
  );
};

export default NewExpense;