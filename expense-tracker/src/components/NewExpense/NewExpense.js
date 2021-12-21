import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import styles from './NewExpense.module.css';

const NewExpense = (props) => {
   const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData, 
         id: Math.random().toString()
      }
      props.onAddExpense(expenseData);
      stopEditingHandler();
   }

   const [isEditing, setEditing] = useState(false);

   const setEditingHandler = () => {
      setEditing(true);
   }

   const stopEditingHandler = () => {
      setEditing(false);
   }

   return <div className={styles['new-expense']}>
      {!isEditing && <button onClick={setEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
   </div>
}

export default NewExpense;