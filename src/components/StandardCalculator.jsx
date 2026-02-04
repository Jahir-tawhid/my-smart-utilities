import { useState } from "react";

const StandardCalculator = () => {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [ans, setAns] = useState(0);

  const calc = (e) => {
    const a = parseFloat(n1) || 0;
    const b = parseFloat(n2) || 0;
    if (e === "+") setAns(a + b);
    if (e === "-") setAns(a - b);
    if (e === "*") setAns(a * b);
    if (e === "/") setAns(b !== 0 ? (a / b).toFixed(2) : "Error");
  };

  return (
    <div className="`w-[250px] h-[300px]` p-6 bg-white rounded-2xl shadow-md border-t-4 border-teal-500">
      <h2 className="font-bold mb-2 text-orange-600">Standard Calculator</h2>
      <input
        type="number"
        value={n1}
        onChange={(e) => setN1(e.target.value)}
        className="w-full border p-2 mb-1"
        placeholder="Num 1"
      />
      <input
        type="number"
        value={n2}
        onChange={(e) => setN2(e.target.value)}
        className="w-full border p-2 mb-2"
        placeholder="Num 2"
      />
      <div className="grid grid-cols-4 gap-1">
        {["+", "-", "*", "/"].map((item) => (
          <button
            key={item}
            onClick={() => calc(item)}
            className="bg-orange-100 p-2 rounded font-bold"
          >
            {item}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          setN1("");
          setN2("");
          setAns(0);
        }}
        className="w-full mt-2 text-xs bg-gray-100 p-1"
      >
        Reset
      </button>
      <h3 className="text-center text-xl font-bold mt-2 text-orange-600">
        RESULT: {ans}
      </h3>
    </div>
  );
};

export default StandardCalculator;
