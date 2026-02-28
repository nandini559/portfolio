import {API} from "./auth"; // same axios instance

// GET USER-SPECIFIC EXPENSES
export const getExpenses = async () => {
  const res = await API.get("/expanseTracker/list");
  return res.data;
};

// ADD EXPENSE (NO userId here)
export const addExpense = async (data : {
  title: string;
  amount: number;
  category: string;
  date: string;
}) => {
  const res = await API.post("/expanseTracker", data);
  return res.data;
};

// DELETE EXPENSE
export const deleteExpense = async (id : string) => {
  const res = await API.delete(`/expanseTracker/${id}`);
  return res.data;
};
