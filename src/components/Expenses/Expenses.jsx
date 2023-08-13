import React from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseItems from './ExpenseItems'
function Expenses(props) {
  return (
    <Card className='expenses'><ExpenseItems
    title={props.expenses[0].title}
    amount={props.expenses[0].amount}
    date={props.expenses[0].date}
  ></ExpenseItems>
  <ExpenseItems
    title={props.expenses[1].title}
    amount={props.expenses[1].amount}
    date={props.expenses[1].date}
  ></ExpenseItems>
  <ExpenseItems
    title={props.expenses[3].title}
    amount={props.expenses[3].amount}
    date={props.expenses[3].date}
  ></ExpenseItems></Card>
  )
}

export default Expenses