import React, { useState } from "react";
import { Box, Card, CardContent, TextField, Button, Typography, Divider } from "@mui/material"; // Removed Grid import

const SavingsCalculator = () => {
  const [initialAmount, setInitialAmount] = useState("");
  const [monthlyDeposit, setMonthlyDeposit] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [months, setMonths] = useState("");
  const [finalAmount, setFinalAmount] = useState(null);

  const calculateSavings = () => {
    if (!initialAmount || !monthlyDeposit || !interestRate || !months) {
      alert("Please fill in all fields.");
      return;
    }

    const P = parseFloat(initialAmount); // Initial amount in INR
    const M = parseFloat(monthlyDeposit); // Monthly deposit in INR
    const r = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const t = parseInt(months); // Number of months

    if (isNaN(P) || isNaN(M) || isNaN(r) || isNaN(t)) {
      alert("Please enter valid numbers.");
      return;
    }

    // Compound interest formula for savings with monthly deposits
    const A = P * Math.pow(1 + r, t) + M * ((Math.pow(1 + r, t) - 1) / r);
    setFinalAmount(A.toFixed(2));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f4f8",
        padding: "20px",
      }}
    >
      <Card sx={{ maxWidth: 400, width: "100%", borderRadius: "16px", boxShadow: 3 }}>
        <CardContent sx={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2", textAlign: "center" }}>
            Savings Calculator (INR)
          </Typography>

          <TextField
            label="Initial Amount (INR)"
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "15px" }}
          />

          <TextField
            label="Monthly Deposit (INR)"
            type="number"
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "15px" }}
          />

          <TextField
            label="Interest Rate (%)"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "15px" }}
          />

          <TextField
            label="Number of Months"
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "20px" }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={calculateSavings}
            fullWidth
            sx={{
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              backgroundColor: "#0288d1",
            }}
          >
            Calculate
          </Button>

          <Divider sx={{ margin: "20px 0" }} />

          {finalAmount !== null && (
            <Typography variant="h6" sx={{ color: "#388e3c", fontWeight: "bold", textAlign: "center" }}>
              Final Savings: ₹{finalAmount}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default SavingsCalculator;
