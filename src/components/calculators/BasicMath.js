import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const BasicMath = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const calculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      alert("Please enter valid numbers");
      return;
    }

    let calcResult;
    switch (operation) {
      case "+":
        calcResult = a + b;
        break;
      case "-":
        calcResult = a - b;
        break;
      case "*":
        calcResult = a * b;
        break;
      case "/":
        calcResult = b !== 0 ? a / b : "Cannot divide by zero";
        break;
      default:
        calcResult = null;
    }

    setResult(calcResult);
    setHistory((prev) => [
      ...prev,
      `${a} ${operation} ${b} = ${calcResult}`,
    ]);
  };

  const clearInputs = () => {
    setNum1("");
    setNum2("");
    setResult(null);
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
        Calculator
      </Typography>

      <Box style={{ marginBottom: "20px" }}>
        <TextField
          label="Number 1"
          variant="outlined"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{ marginRight: "10px", width: "45%" }}
        />
        <TextField
          label="Number 2"
          variant="outlined"
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{ width: "45%" }}
        />
      </Box>

      <Grid container spacing={2} justifyContent="center">
        {["+", "-", "*", "/"].map((operator) => (
          <Grid item xs={3} key={operator}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => calculate(operator)}
            >
              {operator}
            </Button>
          </Grid>
        ))}
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={clearInputs}
          >
            Clear
          </Button>
        </Grid>
      </Grid>

      {result !== null && (
        <Typography variant="h5" style={{ marginTop: "20px" }}>
          Result: {result}
        </Typography>
      )}

      <Divider style={{ margin: "20px 0" }} />

      <Typography variant="h6">History</Typography>
      <List>
        {history.length > 0 ? (
          history.map((entry, index) => (
            <ListItem key={index}>
              <ListItemText primary={entry} />
            </ListItem>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            No calculations yet.
          </Typography>
        )}
      </List>
    </Paper>
  );
};

export default BasicMath;
