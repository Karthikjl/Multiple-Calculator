import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";

const CalorieCalculator = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [calories, setCalories] = useState(null);
  const [error, setError] = useState("");

  const calculateCalories = () => {
    if (!age || !weight || !height) {
      setError("Please fill in all fields.");
      setCalories(null);
      return;
    }

    setError("");
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);
    const ageInYears = parseInt(age);

    let bmr;
    if (gender === "male") {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5;
    } else {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears - 161;
    }

    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9,
    };

    const dailyCalories = (bmr * activityMultiplier[activityLevel]).toFixed(2);
    setCalories(dailyCalories);
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
          Calorie Calculator
        </Typography>

        <FormControl component="fieldset" sx={{ marginBottom: "20px" }}>
          <FormLabel component="legend" sx={{ textAlign: "left" }}>
            Select Gender
          </FormLabel>
          <RadioGroup
            row
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Age (years)"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
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
              label="Height (cm)"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Activity Level</InputLabel>
              <Select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                variant="outlined"
                fullWidth
              >
                <MenuItem value="sedentary">Sedentary (Little to no exercise)</MenuItem>
                <MenuItem value="light">Light (Light exercise/sports 1-3 days/week)</MenuItem>
                <MenuItem value="moderate">Moderate (Moderate exercise 3-5 days/week)</MenuItem>
                <MenuItem value="active">Active (Intense exercise 6-7 days/week)</MenuItem>
                <MenuItem value="very_active">Very Active (Very intense exercise daily)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {error && (
          <Typography color="error" sx={{ marginTop: "10px" }}>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={calculateCalories}
          fullWidth
          sx={{
            marginTop: "20px",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Calculate Calories
        </Button>

        {calories !== null && (
          <Typography
            variant="h6"
            sx={{
              marginTop: "20px",
              color: "#388e3c",
              fontWeight: "bold",
            }}
          >
            Your Daily Calorie Needs: {calories} kcal
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default CalorieCalculator;
