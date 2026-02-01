const BASE_URL = "http://localhost:3000/expanseTracker";

export const getExpenses = async () => {
  const res = await fetch(`${BASE_URL}/list`);
  if (!res.ok) throw new Error("Failed to fetch expenses");
  return res.json(); 
};

export const addExpense = async (expense: {
  title: string;
  amount: number;
  category: string;
}) => {
  const res = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense),
  });

  if (!res.ok) throw new Error("Failed to add expense");
  return res.json(); 
};

export const deleteExpense = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete expense");
};
