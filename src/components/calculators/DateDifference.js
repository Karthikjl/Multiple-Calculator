import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const DateDifference = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [difference, setDifference] = useState(null);

  const calculateDifference = () => {
    if (!startDate || !endDate) {
      alert("Please select both dates.");
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      alert("Start date cannot be after the end date.");
      return;
    }

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setDifference({ years, months, days });
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
          Date Difference Calculator
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Start Date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="End Date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          onClick={calculateDifference}
          fullWidth
          sx={{
            marginTop: "20px",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Calculate Difference
        </Button>

        {difference && (
          <Typography
            variant="h6"
            sx={{
              marginTop: "20px",
              color: "#388e3c",
              fontWeight: "bold",
            }}
          >
            Difference: {difference.years} years, {difference.months} months,{" "}
            {difference.days} days
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default DateDifference;
