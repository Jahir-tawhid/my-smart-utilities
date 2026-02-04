import { useState } from "react";

const GradeSheet = () => {
  // States for input and result
  const [mark, setMark] = useState("");
  const [grade, setGrade] = useState("");

  const calculateGrade = () => {
    // Convert input string to a number
    const score = parseFloat(mark);

    // Step 1: Check if the number is valid (between 0 and 100)
    if (score < 0 || score > 100) {
      setGrade("Invalid!");
    }
    // Step 2: Apply grading logic
    else if (score >= 80) {
      setGrade("A+");
    } else if (score >= 33) {
      setGrade("Pass");
    } else {
      setGrade("Fail");
    }
  };

  return (
    // Compact card size using 'max-w-[250px]'
    <div className="`w-[250px] h-[300px]` p-6 bg-white rounded-2xl shadow-md border-t-4 border-teal-500">
      <h2 className="text-sm font-bold mb-3 text-gray-700">Student Grade</h2>

      <input
        type="number"
        value={mark}
        onChange={(e) => setMark(e.target.value)}
        placeholder="Enter 0-100"
        className="w-full p-2 border border-gray-200 rounded text-sm mb-3 outline-none focus:border-purple-400"
      />

      <button
        onClick={calculateGrade}
        className="w-full bg-purple-500 text-white py-1.5 rounded-md text-sm font-semibold hover:bg-purple-600 transition"
      >
        Get Result
      </button>

      {/* Result Display Area */}
      <div className="mt-4 text-center border-t pt-2">
        <span className="text-[10px] text-gray-400 block">GRADE</span>
        <span
          className={`text-xl font-black ${grade === "Invalid!" ? "text-red-500" : "text-purple-600"}`}
        >
          {grade || "---"}
        </span>
      </div>
    </div>
  );
};

export default GradeSheet;
