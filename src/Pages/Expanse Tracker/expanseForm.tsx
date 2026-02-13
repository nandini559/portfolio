import { useState } from "react";
import { Expense } from "../../types/expanse";
import { addExpense } from "../../api/expanseBackendAPI";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


interface ExpenseFormProps {
  onAdd: (expense: Expense) => void;
}

 <ToastContainer position="top-right" autoClose={2000} />


function ExpenseForm({ onAdd }: ExpenseFormProps) {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");

const navigate = useNavigate();



  const submitHandler = async () => {
  const payload = {
    title,
    amount: Number(amount),
    category,
    date: new Date().toISOString(),
  };

  try {
    await addExpense(payload);

    // ✅ show toast FIRST
    toast.success("Expense added successfully 💸✨");

    // ✅ navigate AFTER toast
    setTimeout(() => {
      navigate("/ExpenseList");
    }, 500);

  } catch (error) {
    toast.error("Failed to add expense ❌");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-[380px] border border-white/40">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Add Expense
        </h3>

        <div className="space-y-4">
          <input
            placeholder="Expense title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />

          <input
            placeholder="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />

<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition bg-white"
>
  <option value="" disabled>
    Select Category
  </option>
  <option value="Food">Food 🍔</option>
  <option value="Travel">Travel ✈️</option>
  <option value="Utilities">Utilities 🛍️</option>
  <option value="Other">Others</option>
</select>





          <button
            onClick={submitHandler}
            className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold tracking-wide hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
          >

            
              
            
              Add Expense
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseForm;
