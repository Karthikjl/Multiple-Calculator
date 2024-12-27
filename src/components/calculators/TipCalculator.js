import React, { useState } from "react";
import { Box, Card, CardContent, TextField, Button, Typography, Grid, Divider } from "@mui/material";

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(10);
  const [tipAmount, setTipAmount] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateTip = () => {
    if (!billAmount || isNaN(billAmount) || billAmount <= 0) {
      alert("Please enter a valid bill amount.");
      return;
    }

    const bill = parseFloat(billAmount);
    const tip = (bill * tipPercentage) / 100;
    const total = bill + tip;

    setTipAmount(tip.toFixed(2));
    setTotalAmount(total.toFixed(2));
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
            Tip Calculator
          </Typography>

          <TextField
            label="Bill Amount (INR)"
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: "15px" }}
          />

          <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
            <Grid item xs={6}>
              <TextField
                label="Tip Percentage (%)"
                type="number"
                value={tipPercentage}
                onChange={(e) => setTipPercentage(e.target.value)}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                onClick={calculateTip}
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
            </Grid>
          </Grid>

          <Divider sx={{ margin: "20px 0" }} />

          {tipAmount !== null && (
            <Typography variant="h6" sx={{ color: "#388e3c", fontWeight: "bold", textAlign: "center" }}>
              Tip Amount: ₹{tipAmount}
            </Typography>
          )}

          {totalAmount !== null && (
            <Typography variant="h6" sx={{ color: "#d32f2f", fontWeight: "bold", textAlign: "center" }}>
              Total Amount: ₹{totalAmount}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default TipCalculator;
