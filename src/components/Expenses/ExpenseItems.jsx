import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css'

function ExpenseItems(props){
   const [title,setTitle] = useState(props.title) 
  const clickHandler=()=>{
    setTitle('updated')
    console.log("clicked");}
    return(
        <div className='expense-item'>
          <div>  
            <ExpenseDate date={props.date} /> 
          </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
            </div>
            <div className='expense-item__price' >{props.amount} </div>
            <button onClick={clickHandler}> change</button>
        </div>
    )
}

export default ExpenseItems;