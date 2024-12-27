import React, { useState } from "react";
import { Box, Paper, TextField, Button, Typography, Grid } from "@mui/material";

const PercentageCalculator = () => {
  const [number, setNumber] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState(null);
  const [calculationType, setCalculationType] = useState("percentageOf");

  const calculatePercentage = () => {
    if (!number || !percentage) {
      alert("Please fill in both fields.");
      return;
    }

    const num = parseFloat(number);
    const perc = parseFloat(percentage);

    if (isNaN(num) || isNaN(perc)) {
      alert("Please enter valid numbers.");
      return;
    }

    let resultValue = 0;

    if (calculationType === "percentageOf") {
      resultValue = (num * perc) / 100;
    } else if (calculationType === "findPercentage") {
      resultValue = (perc * 100) / num;
    } else if (calculationType === "percentageChange") {
      resultValue = ((perc - num) / num) * 100;
    }

    setResult(resultValue.toFixed(2));
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
          Percentage Calculator
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Number"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Percentage"
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => setCalculationType("percentageOf")}
              sx={{
                padding: "10px",
                backgroundColor: "#0288d1",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              % of Number
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => setCalculationType("findPercentage")}
              sx={{
                padding: "10px",
                backgroundColor: "#0288d1",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Find Percentage
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => setCalculationType("percentageChange")}
              sx={{
                padding: "10px",
                backgroundColor: "#0288d1",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              % Change
            </Button>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={calculatePercentage}
          fullWidth
          sx={{
            marginTop: "20px",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#0288d1",
          }}
        >
          Calculate
        </Button>

        {result !== null && (
          <Typography
            variant="h6"
            sx={{
              marginTop: "20px",
              color: "#388e3c",
              fontWeight: "bold",
            }}
          >
            Result: {result}%
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default PercentageCalculator;
