import { useState } from "react";

const ElectricityBill = () => {
  const [units, setUnits] = useState("");
  const [res, setRes] = useState({ base: 0, vat: 0, total: 0 });

  const calculate = () => {
    const u = parseFloat(units) || 0;
    let base = u <= 100 ? u * 5 : 100 * 5 + (u - 100) * 12;
    let vat = base * 0.15;
    setRes({
      base: base.toFixed(2),
      vat: vat.toFixed(2),
      total: (base + vat).toFixed(2),
    });
  };

  return (
    <div className="`w-[250px] h-[300px]` p-6 bg-white rounded-2xl shadow-md border-t-4 border-teal-500">
      <h2 className="font-bold mb-2">Electricity Bill</h2>
      <input
        type="number"
        value={units}
        onChange={(e) => setUnits(e.target.value)}
        className="w-full border p-2 mb-2"
        placeholder="Units"
      />
      <button
        onClick={calculate}
        className="w-full bg-yellow-500 text-white p-2 rounded"
      >
        Check Bill
      </button>
      <div className="mt-2 text-sm">
        <p>Base Bill: {res.base} TK</p>
        <p>VAT (15%): {res.vat} TK</p>
        <p className="font-bold border-t text-yellow-700">
          Total: {res.total} TK
        </p>
      </div>
    </div>
  );
};

export default ElectricityBill;
