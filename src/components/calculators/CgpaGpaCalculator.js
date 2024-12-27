import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

const CgpaGpaCalculator = () => {
  const [grades, setGrades] = useState([""]);
  const [gpa, setGpa] = useState(null);
  const [cgpa, setCgpa] = useState(null);

  const handleGradeChange = (index, value) => {
    const updatedGrades = [...grades];
    updatedGrades[index] = value;
    setGrades(updatedGrades);
  };

  const addGradeField = () => {
    setGrades([...grades, ""]);
  };

  const removeGradeField = (index) => {
    const updatedGrades = grades.filter((_, i) => i !== index);
    setGrades(updatedGrades);
  };

  const calculateGpaCgpa = () => {
    const numericGrades = grades
      .map((grade) => parseFloat(grade))
      .filter((grade) => !isNaN(grade) && grade >= 0 && grade <= 10);

    if (numericGrades.length === 0) {
      alert("Please enter valid grades between 0 and 10.");
      return;
    }

    const total = numericGrades.reduce((sum, grade) => sum + grade, 0);
    const gpaValue = total / numericGrades.length;

    setGpa(gpaValue.toFixed(2));
    setCgpa(gpaValue.toFixed(2)); // Assuming CGPA is the same as GPA for this session
  };

  const resetFields = () => {
    setGrades([""]);
    setGpa(null);
    setCgpa(null);
  };

  return (
    <Paper
      elevation={3}
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        CGPA & GPA Calculator
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Enter your grades (0 to 10 scale):
      </Typography>
      <Box>
        {grades.map((grade, index) => (
          <Grid container spacing={1} key={index} alignItems="center">
            <Grid item xs={8}>
              <TextField
                value={grade}
                onChange={(e) => handleGradeChange(index, e.target.value)}
                label={`Grade ${index + 1}`}
                variant="outlined"
                fullWidth
                type="number"
                inputProps={{ min: 0, max: 10, step: 0.1 }}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="error"
                onClick={() => removeGradeField(index)}
                fullWidth
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
        onClick={addGradeField}
      >
        Add Grade
      </Button>
      <Box style={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          color="success"
          fullWidth
          style={{ marginBottom: "10px" }}
          onClick={calculateGpaCgpa}
        >
          Calculate GPA & CGPA
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={resetFields}
        >
          Reset
        </Button>
      </Box>
      {gpa !== null && (
        <Box style={{ marginTop: "20px" }}>
          <Typography variant="h5" style={{ color: "#1976d2" }}>
            GPA: {gpa}
          </Typography>
          <Typography variant="h5" style={{ color: "#1976d2" }}>
            CGPA: {cgpa}
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default CgpaGpaCalculator;
