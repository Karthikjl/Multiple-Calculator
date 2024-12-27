import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  MenuItem,
} from "@mui/material";

const HydrationCalculator = () => {
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [hydrationNeed, setHydrationNeed] = useState(null);

  const activityOptions = [
    { value: 0, label: "Sedentary (little or no exercise)" },
    { value: 0.2, label: "Lightly active (light exercise/sports 1-3 days/week)" },
    { value: 0.4, label: "Moderately active (moderate exercise/sports 3-5 days/week)" },
    { value: 0.6, label: "Very active (hard exercise/sports 6-7 days a week)" },
    { value: 0.8, label: "Extra active (very hard exercise/physical job)" },
  ];

  const calculateHydration = () => {
    if (!weight || !activityLevel) {
      alert("Please fill in all fields.");
      return;
    }

    const weightInKg = parseFloat(weight);
    const activityMultiplier = parseFloat(activityLevel);

    if (weightInKg <= 0) {
      alert("Please enter a valid weight.");
      return;
    }

    // Base water intake: 35 ml per kg of body weight
    const baseHydration = weightInKg * 35;

    // Additional water intake based on activity level
    const additionalHydration = baseHydration * activityMultiplier;

    // Total water intake
    const totalHydration = (baseHydration + additionalHydration).toFixed(2);

    setHydrationNeed(totalHydration);
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
          Hydration Calculator
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Weight (kg)"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Activity Level"
              select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              fullWidth
              variant="outlined"
            >
              {activityOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={calculateHydration}
          fullWidth
          sx={{
            marginTop: "20px",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Calculate Hydration
        </Button>

        {hydrationNeed && (
          <Typography
            variant="h6"
            sx={{
              marginTop: "20px",
              color: "#388e3c",
              fontWeight: "bold",
            }}
          >
            You need approximately {hydrationNeed} ml of water daily.
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default HydrationCalculator;
