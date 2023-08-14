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
  return (


    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      
     { props.expenses.map((expense) => (
        <ExpenseItems title={expense.title}
                      amount={expense.amount}
                      date={expense.date} />)
      )}

      
  
  </Card>
  )
}

export default Expenses