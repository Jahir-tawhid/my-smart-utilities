import { useState } from "react";

const BudgetTracker = () => {
  // States for income, expense and balance
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  // Logic: Balance = Income - Expense
  const calculateBalance = () => {
    const total = Number(income) - Number(expense);
    setBalance(total);
  };

  return (
    <div className="`w-[250px] h-[300px]` p-6 bg-white rounded-2xl shadow-md border-t-4 border-teal-500">
      <h2 className="text-xl font-bold mb-4 text-teal-600">Daily Budget</h2>
      <input
        type="number"
        className="w-full p-2 border rounded mb-2"
        placeholder="Total Income"
        onChange={(e) => setIncome(e.target.value)}
      />
      <input
        type="number"
        className="w-full p-2 border rounded mb-4"
        placeholder="Total Expense"
        onChange={(e) => setExpense(e.target.value)}
      />
      <button
        onClick={calculateBalance}
        className="w-full bg-teal-500 text-white py-2 rounded-lg font-bold"
      >
        Calculate Balance
      </button>

      {/* Dynamic Color Logic: Red if balance is negative, Green if positive */}
      <div
        className={`mt-4 text-center p-2 rounded ${balance < 0 ? "bg-red-100" : "bg-green-100"}`}
      >
        <p className="text-sm">Current Balance</p>
        <h3
          className={`text-2xl font-black ${balance < 0 ? "text-red-600" : "text-green-600"}`}
        >
          {balance} TK
        </h3>
      </div>
    </div>
  );
};

export default BudgetTracker;
