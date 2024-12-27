import React, { useState } from "react";
import Home from "./components/Home";
import BasicMath from "./components/calculators/BasicMath";
import Scientific from "./components/calculators/Scientific";
import BMICalculator from "./components/calculators/BMICalculator";
import AgeCalculator from "./components/calculators/AgeCalculator";
import BodyFatCalculator from "./components/calculators/BodyFatCalculator";
import CalorieCalculator from "./components/calculators/CalorieCalculator";
import DateDifference from "./components/calculators/DateDifference";
import FuelCostCalculator from "./components/calculators/FuelCostCalculator";
import HydrationCalculator from "./components/calculators/HydrationCalculator";
import InvestmentCalculator from "./components/calculators/InvestmentCalculator";
import LoanCalculator from "./components/calculators/LoanCalculator";
import MortgageCalculator from "./components/calculators/MortgageCalculator";
import PercentageCalculator from "./components/calculators/PercentageCalculator";
import SavingsCalculator from "./components/calculators/SavingsCalculator";
import TaxCalculator from "./components/calculators/TaxCalculator";
import TipCalculator from "./components/calculators/TipCalculator";
import UnitConverter from "./components/calculators/UnitConverter";
import MarkPercentageCalculator from "./components/calculators/MarkPercentageCalculator";
import CgpaGpaCalculator from "./components/calculators/CgpaGpaCalculator";

const App = () => {
  const [selectedCalculator, setSelectedCalculator] = useState(null);

  const renderCalculator = () => {
    switch (selectedCalculator) {
      case "BasicMath":
        return <BasicMath />;
      case "Scientific":
        return <Scientific />;
      case "BMI":
        return <BMICalculator />;
      case "AgeCalculator":
        return <AgeCalculator />;
      case "BodyFatCalculator":
        return <BodyFatCalculator />;
      case "CalorieCalculator":
        return <CalorieCalculator />;
      case "DateDifference":
        return <DateDifference />;
      case "FuelCostCalculator":
        return <FuelCostCalculator />;
      case "HydrationCalculator":
        return <HydrationCalculator />;
      case "InvestmentCalculator":
        return <InvestmentCalculator />;
      case "LoanCalculator":
        return <LoanCalculator />;
      case "MortgageCalculator":
        return <MortgageCalculator />;
      case "PercentageCalculator":
        return <PercentageCalculator />;
      case "SavingsCalculator":
        return <SavingsCalculator />;
      case "TaxCalculator":
        return <TaxCalculator />;
      case "TipCalculator":
        return <TipCalculator />;
      case "UnitConverter":
        return <UnitConverter />;
      case "MarkPercentageCalculator":
        return <MarkPercentageCalculator />;
      case "CgpaGpaCalculator":
        return <CgpaGpaCalculator />;
      default:
        return <Home onSelect={setSelectedCalculator} />;
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Calculator Hub</h1>
      {renderCalculator()}
      {selectedCalculator && (
        <button
          onClick={() => setSelectedCalculator(null)}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007BFF",
            color: "#FFF",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Go Back
        </button>
      )}
    </div>
  );
};

export default App;
