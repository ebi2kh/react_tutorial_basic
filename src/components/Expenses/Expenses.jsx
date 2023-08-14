import React,{useState} from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseItems from './ExpenseItems'
import ExpensesFilter from './ExpensesFilter'
function Expenses(props) {
  
    const [filteredYear, setFilteredYear] = useState('2020');
  
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(ex =>{
      return ex.date.getFullYear().toString() === filteredYear
    })
  return (


    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

     { filteredExpenses.map((expense) => (
        <ExpenseItems 
        key= {expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />)
      )}

      
  
  </Card>
  )
}

export default Expenses