import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { AccessAlarm, Calculate, FitnessCenter, LocalHospital, Savings, Home as HomeIcon } from "@mui/icons-material";

const Home = ({ onSelect }) => {
  const categories = [
    { name: "Basic Math", id: "BasicMath", icon: <Calculate /> },
    { name: "Scientific Calculator", id: "Scientific", icon: <AccessAlarm /> },
    { name: "BMI Calculator", id: "BMI", icon: <FitnessCenter /> },
    { name: "Age Calculator", id: "AgeCalculator", icon: <HomeIcon /> },
    { name: "Body Fat Calculator", id: "BodyFatCalculator", icon: <LocalHospital /> },
    { name: "Calorie Calculator", id: "CalorieCalculator", icon: <FitnessCenter /> },
    { name: "Date Difference Calculator", id: "DateDifference", icon: <AccessAlarm /> },
    { name: "Fuel Cost Calculator", id: "FuelCostCalculator", icon: <Calculate /> },
    { name: "Hydration Calculator", id: "HydrationCalculator", icon: <LocalHospital /> },
    { name: "Investment Calculator", id: "InvestmentCalculator", icon: <Savings /> },
    { name: "Loan Calculator", id: "LoanCalculator", icon: <HomeIcon /> },
    { name: "Mortgage Calculator", id: "MortgageCalculator", icon: <HomeIcon /> },
    { name: "Percentage Calculator", id: "PercentageCalculator", icon: <Calculate /> },
    { name: "Savings Calculator", id: "SavingsCalculator", icon: <Savings /> },
    { name: "Tax Calculator", id: "TaxCalculator", icon: <HomeIcon /> },
    { name: "Tip Calculator", id: "TipCalculator", icon: <Calculate /> },
    { name: "Unit Converter", id: "UnitConverter", icon: <Calculate /> },
    { name: "Mark Percentage Calculator", id: "MarkPercentageCalculator", icon: <Calculate /> },
    { name: "CGPA/GPA Calculator", id: "CgpaGpaCalculator", icon: <Calculate /> },
  ];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
        Choose a Calculator
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <Button
              onClick={() => onSelect(category.id)}
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: "20px",
                fontSize: "16px",
                backgroundColor: "#0288d1",
                color: "#FFF",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              {category.icon}
              <Typography variant="body1" sx={{ marginTop: "10px" }}>
                {category.name}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
