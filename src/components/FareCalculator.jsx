import { useState } from "react";

const FareCalculator = () => {
  const [distance, setDistance] = useState("");
  const [result, setResult] = useState({ fare: 0, vat: 0, total: 0 });

  const calculate = () => {
    // Convert string input to number
    const dist = parseFloat(distance) || 0;
    let baseFare = dist * 20;

    // Logic: 5% discount for long distance
    if (dist > 10) baseFare -= baseFare * 0.05;

    const vat = baseFare * 0.15;
    setResult({
      fare: baseFare.toFixed(2),
      vat: vat.toFixed(2),
      total: (baseFare + vat).toFixed(2),
    });
  };

  return (
    <div className="`w-[250px] h-[300px]` p-6 bg-white rounded-2xl shadow-md border-t-4 border-teal-500">
      <h2 className="font-bold mb-2">Taxi Fare System</h2>
      <input
        type="number"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        className="w-full border p-2 mb-2"
        placeholder="KM"
      />
      <button
        onClick={calculate}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Calculate Fare
      </button>
      <div className="mt-2 text-sm">
        <p>Fare: {result.fare} TK</p>
        <p>VAT (15%): {result.vat} TK</p>
        <p className="w-full bg-teal-500 text-white py-2 rounded-lg font-bold">
          Total: {result.total} TK
        </p>
      </div>
    </div>
  );
};

export default FareCalculator;
