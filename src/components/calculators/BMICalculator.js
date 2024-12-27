import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  Divider,
  Card,
  CardContent,
} from "@mui/material";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter valid weight and height.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    // Determine BMI category
    if (bmiValue < 18.5) {
      setBmiCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiCategory("Overweight");
    } else {
      setBmiCategory("Obesity");
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        BMI Calculator
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Enter your weight and height to calculate your BMI.
      </Typography>

      <Box style={{ marginBottom: "20px" }}>
        <TextField
          label="Weight (kg)"
          variant="outlined"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          fullWidth
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Height (cm)"
          variant="outlined"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          fullWidth
          style={{ marginBottom: "20px" }}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={calculateBMI}
        style={{ padding: "10px" }}
      >
        Calculate BMI
      </Button>

      {bmi && (
        <Card
          variant="outlined"
          style={{
            marginTop: "20px",
            padding: "10px",
            textAlign: "center",
            backgroundColor: "#f4f6f8",
          }}
        >
          <CardContent>
            <Typography variant="h5" color="primary">
              Your BMI: {bmi}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Category: {bmiCategory}
            </Typography>
          </CardContent>
        </Card>
      )}

      <Divider style={{ marginTop: "20px" }} />

      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            color="secondary"
            onClick={() => {
              setWeight("");
              setHeight("");
              setBmi(null);
              setBmiCategory("");
            }}
            style={{ padding: "10px" }}
          >
            Clear
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            fullWidth
            color="default"
            onClick={() => {
              setWeight("");
              setHeight("");
              setBmi(null);
              setBmiCategory("");
            }}
            style={{ padding: "10px" }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BMICalculator;
