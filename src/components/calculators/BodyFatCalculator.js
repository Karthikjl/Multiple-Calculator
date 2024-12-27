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
} from "@mui/material";

const BodyFatCalculator = () => {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState(""); // Only for females
  const [bodyFat, setBodyFat] = useState(null);
  const [error, setError] = useState("");

  const calculateBodyFat = () => {
    if (!weight || !height || !waist || !neck || (gender === "female" && !hip)) {
      setError("Please fill in all required fields.");
      setBodyFat(null);
      return;
    }

    setError("");
    const heightInCm = parseFloat(height);
    const waistInCm = parseFloat(waist);
    const neckInCm = parseFloat(neck);
    const hipInCm = parseFloat(hip);

    let bodyFatPercentage;

    if (gender === "male") {
      bodyFatPercentage = (
        495 /
          (1.0324 -
            0.19077 * Math.log10(waistInCm - neckInCm) +
            0.15456 * Math.log10(heightInCm)) -
        450
      ).toFixed(2);
    } else {
      bodyFatPercentage = (
        495 /
          (1.29579 -
            0.35004 * Math.log10(waistInCm + hipInCm - neckInCm) +
            0.22100 * Math.log10(heightInCm)) -
        450
      ).toFixed(2);
    }

    setBodyFat(bodyFatPercentage);
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
          Body Fat Calculator
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
            <TextField
              label="Waist (cm)"
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Neck (cm)"
              type="number"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          {gender === "female" && (
            <Grid item xs={12}>
              <TextField
                label="Hip (cm)"
                type="number"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                fullWidth
                variant="outlined"
              />
            </Grid>
          )}
        </Grid>

        {error && (
          <Typography color="error" sx={{ marginTop: "10px" }}>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={calculateBodyFat}
          fullWidth
          sx={{
            marginTop: "20px",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Calculate Body Fat
        </Button>

        {bodyFat !== null && (
          <Typography
            variant="h6"
            sx={{
              marginTop: "20px",
              color: "#388e3c",
              fontWeight: "bold",
            }}
          >
            Your Body Fat Percentage: {bodyFat}%
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default BodyFatCalculator;
