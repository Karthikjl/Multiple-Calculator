import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = () => {
    if (!loanAmount || !interestRate || !loanTerm) {
      alert("Please fill in all fields.");
      return;
    }

    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const monthlyRate = annualRate / 12;
    const months = parseInt(loanTerm) * 12;

    if (principal <= 0 || annualRate < 0 || months <= 0) {
      alert("Please enter valid positive values.");
      return;
    }

    const monthly =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -months));

    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f7f9fc",
        padding: "20px",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: "30px",
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#1976d2", fontWeight: "bold" }}
        >
          Loan Calculator
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Loan Amount (₹)"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Annual Interest Rate (%)"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Loan Term (Years)"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={calculateMonthlyPayment}
          fullWidth
          sx={{
            marginTop: "20px",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#0288d1",
          }}
        >
          Calculate Monthly Payment
        </Button>

        {monthlyPayment && (
          <Typography
            variant="h6"
            sx={{
              marginTop: "20px",
              color: "#388e3c",
              fontWeight: "bold",
            }}
          >
            Monthly Payment: ₹{monthlyPayment}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default LoanCalculator;
