import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const ScientificCalculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        // Evaluate the mathematical expression
        const result = eval(input);
        setInput(result.toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const scientificFunctions = {
    sin: () => setInput(Math.sin(eval(input)).toString()),
    cos: () => setInput(Math.cos(eval(input)).toString()),
    tan: () => setInput(Math.tan(eval(input)).toString()),
    log: () => setInput(Math.log10(eval(input)).toString()),
    sqrt: () => setInput(Math.sqrt(eval(input)).toString()),
  };

  const handleScientificFunction = (func) => {
    if (input) {
      scientificFunctions[func]();
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
        Scientific Calculator
      </Typography>
      <Box>
        <TextField
          value={input}
          fullWidth
          variant="outlined"
          inputProps={{ readOnly: true }}
          style={{ marginBottom: "20px" }}
        />
      </Box>
      <Grid container spacing={2}>
        {/* Number Buttons */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <Grid item xs={4} key={num}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleButtonClick(num.toString())}
            >
              {num}
            </Button>
          </Grid>
        ))}

        {/* Operators */}
        {["+", "-", "*", "/"].map((operator) => (
          <Grid item xs={3} key={operator}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => handleButtonClick(operator)}
            >
              {operator}
            </Button>
          </Grid>
        ))}

        {/* Clear and Equals */}
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={() => handleButtonClick("C")}
          >
            Clear
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => handleButtonClick("=")}
          >
            =
          </Button>
        </Grid>

        {/* Scientific Functions */}
        {["sin", "cos", "tan", "log", "sqrt"].map((func) => (
          <Grid item xs={4} key={func}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleScientificFunction(func)}
            >
              {func}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ScientificCalculator;
