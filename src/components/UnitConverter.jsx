import React, { useState } from "react";

const UnitConverter = () => {
  const [val, setVal] = useState("");
  const [res, setRes] = useState("");
  // 'mode' is a variable to track if we are doing Normal or Reverse conversion
  const [mode, setMode] = useState("normal");

  // Function for Distance (KM <-> Mile)
  const convertDist = () => {
    const n = parseFloat(val);
    if (!n) return;
    if (mode === "normal") {
      setRes((n * 0.621).toFixed(2) + " Miles");
    } else {
      setRes((n / 0.621).toFixed(2) + " KM");
    }
  };

  // Function for Length (Inch <-> CM)
  const convertLen = () => {
    const n = parseFloat(val);
    if (!n) return;
    if (mode === "normal") {
      setRes((n * 2.54).toFixed(2) + " CM");
    } else {
      setRes((n / 2.54).toFixed(2) + " Inch");
    }
  };

  return (
    // Fixed Width (250px) and Height (300px) to keep the card stable
    <div className="`w-[250px] h-[300px]` p-6 bg-white rounded-2xl shadow-md border-t-4 border-teal-500 flex flex-col justify-between mx-auto">
      <h2 className="font-bold text-pink-600 text-center">Unit Converter</h2>

      {/* Mode Toggle Buttons */}
      <div className="flex border rounded overflow-hidden">
        <button
          onClick={() => {
            setMode("normal");
            setRes("");
          }}
          className={`flex-1 p-1 text-[10px] ${mode === "normal" ? "bg-pink-500 text-white" : "bg-gray-50"}`}
        >
          Normal
        </button>
        <button
          onClick={() => {
            setMode("reverse");
            setRes("");
          }}
          className={`flex-1 p-1 text-[10px] ${mode === "reverse" ? "bg-pink-500 text-white" : "bg-gray-50"}`}
        >
          Reverse
        </button>
      </div>

      <input
        type="number"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        className="w-full border p-2 text-sm"
        placeholder="Enter Value"
      />

      <div className="flex gap-2">
        <button
          onClick={convertDist}
          className="flex-1 bg-pink-500 text-white p-2 text-[10px] rounded font-bold"
        >
          {mode === "normal" ? "KM to Mile" : "Mile to KM"}
        </button>
        <button
          onClick={convertLen}
          className="flex-1 bg-pink-400 text-white p-2 text-[10px] rounded font-bold"
        >
          {mode === "normal" ? "Inch to CM" : "CM to Inch"}
        </button>
      </div>

      <div className="text-center bg-pink-50 p-2 rounded border border-pink-100">
        <p className="text-[10px] text-gray-400">RESULT</p>
        <b className="text-pink-600 text-sm">{res || "---"}</b>
      </div>
    </div>
  );
};

export default UnitConverter;
