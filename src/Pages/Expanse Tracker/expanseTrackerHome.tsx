import React, { useEffect, useState } from "react";
import ExpenseForm from "./expanseForm";
import ExpenseList from "./expanseList";
import { addExpense, deleteExpense, getExpenses } from "../../api/expanseBackendAPI";
import { Expense } from "../../types/expanse";


const ExpanseTrackerHome = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);





  // ✅ Fetch all expenses on page load
  useEffect(() => {
    getExpenses()
      .then((data) => {
        console.log("Expenses from backend", data);
        setExpenses(data);
      })
      .catch((err) => console.error(err));
  }, []);





  // ✅ Add expense
  const addExpenseHandler = async (expense: Omit<Expense, "id">) => {
    try {
      const savedExpense = await addExpense(expense);
      setExpenses((prev) => [...prev, savedExpense]);
    } catch (err) {
      console.error(err);
      alert("Failed to add expense");
    }
  };





  // ✅ Delete expense
  const deleteExpenseHandler = async (id: number) => {
    try {
      await deleteExpense(id);
      setExpenses((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete expense");
    }
  };

  return (
    <div>
   
      <ExpenseForm onAdd={addExpenseHandler} />
    
      <ExpenseList expenses={expenses} onDelete={deleteExpenseHandler} />
      
    </div>
  );
};

export default ExpanseTrackerHome;
