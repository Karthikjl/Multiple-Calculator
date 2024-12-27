import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";

const AgeCalculator = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = () => {
    if (!dob) {
      setError("Please enter your date of birth.");
      setAge(null);
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }

    setAge(calculatedAge);
    setError("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f6f9",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Age Calculator
        </Typography>
        <TextField
          label="Enter Date of Birth"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ marginBottom: "20px" }}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          variant="contained"
          color="primary"
          onClick={calculateAge}
          fullWidth
          sx={{ marginBottom: "20px" }}
        >
          Calculate Age
        </Button>
        {age !== null && (
          <Typography variant="h6" color="primary">
            Your Age: {age} years
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default AgeCalculator;
