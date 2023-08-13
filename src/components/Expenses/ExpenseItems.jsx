import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css'

function ExpenseItems(props){
    

    return(
        <div className='expense-item'>
          <div>  
            <ExpenseDate date={props.date} /> 
          </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price' >{props.amount} </div>
        </div>
    )
}

export default ExpenseItems;