import React, { useState } from "react";
import { Box, Card, CardContent, TextField, Button, Typography, Divider } from "@mui/material";

const TaxCalculator = () => {
  const [income, setIncome] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [taxAmount, setTaxAmount] = useState(null);

  const calculateTax = () => {
    if (!income || !taxRate) {
      alert("Please fill in all fields.");
      return;
    }

    const incomeValue = parseFloat(income);
    const taxRateValue = parseFloat(taxRate);

    if (isNaN(incomeValue) || isNaN(taxRateValue)) {
      alert("Please enter valid numbers.");
      return;
    }

    const calculatedTax = (incomeValue * taxRateValue) / 100;
    setTaxAmount(calculatedTax.toFixed(2));
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
            Tax Calculator
          </Typography>

          <TextField
            label="Income (INR)"
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "15px" }}
          />

          <TextField
            label="Tax Rate (%)"
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "20px" }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={calculateTax}
            fullWidth
            sx={{
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              backgroundColor: "#0288d1",
            }}
          >
            Calculate Tax
          </Button>

          <Divider sx={{ margin: "20px 0" }} />

          {taxAmount !== null && (
            <Typography variant="h6" sx={{ color: "#388e3c", fontWeight: "bold", textAlign: "center" }}>
              Tax Amount: ₹{taxAmount}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default TaxCalculator;
