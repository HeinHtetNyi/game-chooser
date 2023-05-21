import { useEffect, useState } from 'react';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter'
import ExpenseList from "./expense-tracker/components/ExpenseList"
import './App.css'
import { initialExpenses } from './expense-tracker/components/constants';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import { Expense } from './expense-tracker/types/ExpenseTypes';

function App() {

  const [expenses, setExpenses] = useState(initialExpenses)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const visibleExpenses = selectedCategory === "All" ?
                          expenses :
                          expenses.filter(expense => expense.category === selectedCategory) 

  const handleOnChangeCategory = (value: string) => {
    setSelectedCategory(value)
  }

  const handleDeleteExpense = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const handleSubmitExpense = (expense: Expense) => {
    setExpenses([...expenses, {id: expenses.length + 1, ...expense}])
  }

  return (
    <>
      <div className='w-75 mx-auto'>
          <div className='mb-5'>
            <ExpenseForm 
              onSubmit={handleSubmitExpense}
            />
          </div>
          <ExpenseFilter onChangeCategory={handleOnChangeCategory}/>
          <ExpenseList 
            expenses={visibleExpenses}
            onDelete={handleDeleteExpense}
          />
      </div>
    </>
  )
}

export default App
