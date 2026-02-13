import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Project from "./Pages/portfolio/projects/project";
import GemlayHome from "./Pages/Gemlay Website/components/gemlayHome";
import Home from "./Pages/TCS/components/tcsHome";
import TcsHome from "./Pages/TCS/components/tcsHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gmeet from "./Pages/GoogleMeet/components/gmeet";
import Main from "./Pages/portfolio/components/main";
import NftHome from "./Pages/NFT Landing page/components/nftHome";
import SingulariesHome from "./Pages/Singularies Ventures/components/singulariesHome";
import ExpanseTrackerHome from "./Pages/Expanse Tracker/expanseTrackerHome";
import ExpenseList from "./Pages/Expanse Tracker/expenseList";
import {addExpense, deleteExpense, getExpenses} from "./api/expanseBackendAPI";
import {Expense} from "./types/expanse";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupForm from "./Pages/Expanse Tracker/signupForm";
import LoginForm from "./Pages/Expanse Tracker/loginForm";

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // ✅ Fetch all expenses on page load
  useEffect(() => {
    getExpenses().then((data) => {
      console.log("Expenses from backend", data);
      setExpenses(data);
    }).catch((err) => console.error(err));
  }, []);

  // ✅ Add expense
  const addExpenseHandler = async (expense : Omit<Expense, "id">) => {
    try {
      const savedExpense = await addExpense(expense);
      setExpenses((prev) => [
        ...prev,
        savedExpense
      ]);
    } catch (err) {
      console.error(err);
      alert("Failed to add expense");
    }
  };

  // ✅ Delete expense
  const deleteExpenseHandler = async (id : number) => {
    try {
      await deleteExpense(id);
      setExpenses((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete expense");
    }
  };

  return (<div className="font-san ">
    <Router>
      <ToastContainer position="top-right" autoClose={2000}/>

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/singularies.ventures" element={<SingulariesHome />}/>
        <Route path="/gemlay" element={<GemlayHome />}/>
        <Route path="/tcs" element={<TcsHome />}/>
        <Route path="/gmeet" element={<Gmeet />}/>
        <Route path="/nft" element={<NftHome />}/>
        <Route path="/expanse-tracker" element={<ExpanseTrackerHome />}/>
        <Route path="/expenseList" element={<ExpenseList
          expenses = {
            expenses
          }
          onDelete = {
            deleteExpenseHandler
          }
          />}/>
        <Route path="/signupform" element={<SignupForm />}/>
        <Route path="/loginform" element={<LoginForm />}/>
      </Routes>
    </Router>
  </div>);
};

export default App;
