import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const MarkPercentageCalculator = () => {
  const [marksObtained, setMarksObtained] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [percentage, setPercentage] = useState(null);

  const calculatePercentage = () => {
    if (marksObtained === "" || totalMarks === "") {
      alert("Please enter both marks obtained and total marks.");
      return;
    }
    if (isNaN(marksObtained) || isNaN(totalMarks)) {
      alert("Please enter valid numbers.");
      return;
    }
    if (Number(totalMarks) <= 0) {
      alert("Total marks must be greater than zero.");
      return;
    }
    if (Number(marksObtained) > Number(totalMarks)) {
      alert("Marks obtained cannot be greater than total marks.");
      return;
    }

    const result = (Number(marksObtained) / Number(totalMarks)) * 100;
    setPercentage(result.toFixed(2));
  };

  const resetFields = () => {
    setMarksObtained("");
    setTotalMarks("");
    setPercentage(null);
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
        Mark Percentage Calculator
      </Typography>
      <Box style={{ marginBottom: "20px" }}>
        <TextField
          label="Marks Obtained"
          value={marksObtained}
          onChange={(e) => setMarksObtained(e.target.value)}
          fullWidth
          variant="outlined"
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Total Marks"
          value={totalMarks}
          onChange={(e) => setTotalMarks(e.target.value)}
          fullWidth
          variant="outlined"
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginBottom: "10px" }}
        onClick={calculatePercentage}
      >
        Calculate Percentage
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={resetFields}
      >
        Reset
      </Button>
      {percentage !== null && (
        <Typography
          variant="h5"
          style={{ marginTop: "20px", color: "#1976d2" }}
        >
          Percentage: {percentage}%
        </Typography>
      )}
    </Paper>
  );
};

export default MarkPercentageCalculator;
