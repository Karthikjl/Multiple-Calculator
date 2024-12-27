import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";

const AgeCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = () => {
    if (!startDate || !endDate) {
      setError("Please enter both dates.");
      setAge(null);
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    if (end < start) {
      setError("End date cannot be earlier than start date.");
      setAge(null);
      return;
    }

    let calculatedAge = end.getFullYear() - start.getFullYear();
    const monthDifference = end.getMonth() - start.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && end.getDate() < start.getDate())) {
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
          maxWidth: "500px",
          textAlign: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Age Calculator
        </Typography>
        
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ marginBottom: "20px" }}
        />
        
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
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
            The age between the dates is: {age} years
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default AgeCalculator;
