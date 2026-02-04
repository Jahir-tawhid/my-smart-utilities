// Importing all mini project components

import BudgetTracker from "./components/BudgetTracker";
import ElectricityBill from "./components/ElectricityBill";
import FareCalculator from "./components/FareCalculator";
import GradeSheet from "./components/GradeSheet";
import SimpleCalculator from "./components/SimpleCalculator";
import StandardCalculator from "./components/StandardCalculator";
import UnitConverter from "./components/UnitConverter";
import VATCalculator from "./components/VATCalculator";

const Home = () => {
  return (
    // Main container with light gray background and full screen height
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">My Smart Utilities</h1>
        <p className="text-gray-500 text-sm">
          A collection of logical React tools
        </p>
      </div>

      {/* Grid Layout: Responsive columns for different screen sizes */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Rendering each logic-based component */}
        <FareCalculator />
        <ElectricityBill />
        <BudgetTracker />
        <StandardCalculator />
        <SimpleCalculator />
        <GradeSheet />
        <VATCalculator />
        <UnitConverter />
      </div>

      {/* Simple Footer */}
      <footer className="mt-10 text-center text-gray-400 text-xs">
        Built with React and Tailwind CSS
      </footer>
    </div>
  );
};

export default Home;
