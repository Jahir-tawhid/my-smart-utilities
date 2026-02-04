import { useState } from "react";

const SimpleCalculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  // Logic: Add numbers and then add 15% VAT
  const handleVatCalculation = () => {
    let sum = Number(num1) + Number(num2);
    let totalWithVat = sum + sum * 0.15;
    setResult(totalWithVat.toFixed(2));
  };

  return (
    <div className="`w-[250px] h-[300px]` p-6 bg-white rounded-2xl shadow-md border-t-4 border-teal-500">
      <h2 className="text-xl font-bold mb-4">Calculator + VAT</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          className="w-1/2 p-2 border border-gray-300 rounded"
          placeholder="Num 1"
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          className="w-1/2 p-2 border border-gray-300 rounded"
          placeholder="Num 2"
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => setResult(Number(num1) + Number(num2))}
          className="bg-gray-200 p-2 rounded hover:bg-gray-300 font-bold"
        >
          +
        </button>
        <button
          onClick={() => setResult(Number(num1) - Number(num2))}
          className="bg-gray-200 p-2 rounded hover:bg-gray-300 font-bold"
        >
          -
        </button>
        <button
          onClick={handleVatCalculation}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 font-bold"
        >
          VAT
        </button>
      </div>
      <p className="mt-6 font-bold text-center text-2xl text-green-700">
        Result: {result}
      </p>
    </div>
  );
};

export default SimpleCalculator;
