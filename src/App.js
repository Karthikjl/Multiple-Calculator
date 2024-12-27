import React, { useState } from "react";
import Home from "./components/Home";
import BasicMath from "./components/calculators/BasicMath";
import Scientific from "./components/calculators/Scientific";
import BMICalculator from "./components/calculators/BMICalculator";
import AgeCalculator from "./components/calculators/AgeCalculator";

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
      default:
        return <Home onSelect={setSelectedCalculator} />;
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>All-in-One Calculator Hub</h1>
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
