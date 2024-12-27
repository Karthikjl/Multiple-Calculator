import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const InvestmentCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [years, setYears] = useState("");
  const [futureValue, setFutureValue] = useState(null);

  const calculateFutureValue = () => {
    if (!initialInvestment || !monthlyContribution || !interestRate || !years) {
      alert("Please fill in all fields.");
      return;
    }

    const principal = parseFloat(initialInvestment);
    const monthly = parseFloat(monthlyContribution);
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(years) * 12;

    if (principal < 0 || monthly < 0 || rate < 0 || months < 0) {
      alert("Please enter positive values.");
      return;
    }

    let total = principal * Math.pow(1 + rate, months);
    for (let i = 1; i <= months; i++) {
      total += monthly * Math.pow(1 + rate, months - i);
    }

    setFutureValue(total.toFixed(2));
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
          Investment Calculator
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Initial Investment (₹)"
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Monthly Contribution (₹)"
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
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
              label="Investment Duration (Years)"
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={calculateFutureValue}
          fullWidth
          sx={{
            marginTop: "20px",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#0288d1",
          }}
        >
          Calculate Future Value
        </Button>

        {futureValue && (
          <Typography
            variant="h6"
            sx={{
              marginTop: "20px",
              color: "#388e3c",
              fontWeight: "bold",
            }}
          >
            Future Value of Investment: ₹{futureValue}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default InvestmentCalculator;
