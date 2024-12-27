import React from "react";

const Home = ({ onSelect }) => {
  const categories = [
    { name: "Basic Math", id: "BasicMath" },
    { name: "Scientific Calculator", id: "Scientific" },
    { name: "BMI Calculator", id: "BMI" },
    {name: "Age Calculator", id: "AgeCalculator"},
  ];

  return (
    <div>
      <h2>Choose a Calculator:</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            style={{
              padding: "15px 25px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#28A745",
              color: "#FFF",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
