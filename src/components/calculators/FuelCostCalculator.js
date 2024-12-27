import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const FuelCostCalculator = () => {
  const [distance, setDistance] = useState("");
  const [fuelEfficiency, setFuelEfficiency] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");
  const [fuelCost, setFuelCost] = useState(null);

  const calculateFuelCost = () => {
    if (!distance || !fuelEfficiency || !fuelPrice) {
      alert("Please fill in all fields.");
      return;
    }

    const distanceValue = parseFloat(distance);
    const fuelEfficiencyValue = parseFloat(fuelEfficiency);
    const fuelPriceValue = parseFloat(fuelPrice);

    if (distanceValue <= 0 || fuelEfficiencyValue <= 0 || fuelPriceValue <= 0) {
      alert("Please enter positive values for all fields.");
      return;
    }

    const cost = ((distanceValue / fuelEfficiencyValue) * fuelPriceValue).toFixed(2);
    setFuelCost(cost);
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
      <Paper
        elevation={4}
        sx={{
          padding: "30px",
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
          Fuel Cost Calculator
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Distance (km)"
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Fuel Efficiency (km/l)"
              type="number"
              value={fuelEfficiency}
              onChange={(e) => setFuelEfficiency(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Fuel Price (per liter)"
              type="number"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={calculateFuelCost}
          fullWidth
          sx={{
            marginTop: "20px",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Calculate Fuel Cost
        </Button>

        {fuelCost !== null && (
          <Typography
            variant="h6"
            sx={{
              marginTop: "20px",
              color: "#388e3c",
              fontWeight: "bold",
            }}
          >
            Total Fuel Cost: ₹{fuelCost}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default FuelCostCalculator;
