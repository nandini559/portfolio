import {Expense} from "../../types/expanse";
import {useNavigate} from "react-router-dom";
import LogoutButton from "./logout";
interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id : number) => void;
}

function ExpenseList({expenses, onDelete} : ExpenseListProps) {
  return (<div className="bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 rounded-2xl shadow-lg p-6 max-w-md mx-auto">
    <h3 className="text-xl font-semibold mb-4 text-gray-800">
      💸 Expense List
    </h3>

    <div className="flex justify-end">
      <LogoutButton/>
    </div>

    <ul className="space-y-3">
      {
        expenses.map((expense) => (<li key={expense.id} className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl hover:shadow transition">
          <div className="text-gray-700">
            <p className="font-medium">{expense.title}</p>
            <p className="text-sm text-gray-500">₹{expense.amount}</p>
          </div>

          <button onClick={() => onDelete(expense.id)} className="text-red-500 hover:text-red-700 text-lg transition">
            ❌
          </button>
        </li>))
      }
    </ul>
  </div>);
}

export default ExpenseList;
