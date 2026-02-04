import { useState } from "react";

const VATCalculator = () => {
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState(15);
  const [total, setTotal] = useState(0);

  const calculate = () => {
    const p = parseFloat(price) || 0;
    const r = parseFloat(rate) || 0;
    const vat = (p * r) / 100;
    setTotal((p + vat).toFixed(2));
  };

  return (
    <div className="`w-[250px] h-[300px]` p-6 bg-white rounded-2xl shadow-md border-t-4 border-teal-500">
      <h2 className="font-bold mb-2">Custom VAT Calculator</h2>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border p-2 mb-2"
        placeholder="Price"
      />
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="w-full border p-2 mb-2"
        placeholder="VAT %"
      />
      <button
        onClick={calculate}
        className="w-full bg-orange-600 text-white p-2 rounded"
      >
        Add VAT
      </button>
      <div className="mt-2 bg-orange-50 p-2 text-center font-bold">
        Total with VAT: {total} TK
      </div>
    </div>
  );
};

export default VATCalculator;
