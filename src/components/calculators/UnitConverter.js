import React, { useState } from "react";
import { Box, Card, CardContent, TextField, Button, Typography, Grid, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState(null);
  const [inputUnit, setInputUnit] = useState("meters");
  const [outputUnit, setOutputUnit] = useState("kilometers");

  const units = {
    length: ["meters", "kilometers", "miles", "centimeters"],
    weight: ["grams", "kilograms", "pounds", "ounces"],
    temperature: ["celsius", "fahrenheit", "kelvin"],
  };

  const convertUnits = () => {
    if (isNaN(inputValue) || inputValue === "") {
      alert("Please enter a valid number.");
      return;
    }

    let result;
    const value = parseFloat(inputValue);

    if (inputUnit === outputUnit) {
      result = value;
    } else if (inputUnit === "meters" && outputUnit === "kilometers") {
      result = value / 1000;
    } else if (inputUnit === "meters" && outputUnit === "miles") {
      result = value * 0.000621371;
    } else if (inputUnit === "meters" && outputUnit === "centimeters") {
      result = value * 100;
    } else if (inputUnit === "kilograms" && outputUnit === "grams") {
      result = value * 1000;
    } else if (inputUnit === "kilograms" && outputUnit === "pounds") {
      result = value * 2.20462;
    } else if (inputUnit === "kilograms" && outputUnit === "ounces") {
      result = value * 35.274;
    } else if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
      result = (value * 9) / 5 + 32;
    } else if (inputUnit === "celsius" && outputUnit === "kelvin") {
      result = value + 273.15;
    } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
      result = (value - 32) * (5 / 9);
    } else if (inputUnit === "fahrenheit" && outputUnit === "kelvin") {
      result = ((value - 32) * (5 / 9)) + 273.15;
    } else if (inputUnit === "kelvin" && outputUnit === "celsius") {
      result = value - 273.15;
    } else if (inputUnit === "kelvin" && outputUnit === "fahrenheit") {
      result = ((value - 273.15) * (9 / 5)) + 32;
    }

    setOutputValue(result.toFixed(2));
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
      <Card sx={{ maxWidth: 500, width: "100%", borderRadius: "16px", boxShadow: 3 }}>
        <CardContent sx={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2", textAlign: "center" }}>
            Unit Converter
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Input Value"
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                fullWidth
                variant="outlined"
                sx={{ marginBottom: "15px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" sx={{ marginBottom: "15px" }}>
                <InputLabel>Input Unit</InputLabel>
                <Select
                  value={inputUnit}
                  onChange={(e) => setInputUnit(e.target.value)}
                  label="Input Unit"
                >
                  {units.length.map((unit) => (
                    <MenuItem key={unit} value={unit}>
                      {unit}
                    </MenuItem>
                  ))}
                  {units.weight.map((unit) => (
                    <MenuItem key={unit} value={unit}>
                      {unit}
                    </MenuItem>
                  ))}
                  {units.temperature.map((unit) => (
                    <MenuItem key={unit} value={unit}>
                      {unit}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Output Value"
                value={outputValue || ""}
                fullWidth
                variant="outlined"
                disabled
                sx={{ marginBottom: "15px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" sx={{ marginBottom: "15px" }}>
                <InputLabel>Output Unit</InputLabel>
                <Select
                  value={outputUnit}
                  onChange={(e) => setOutputUnit(e.target.value)}
                  label="Output Unit"
                >
                  {units.length.map((unit) => (
                    <MenuItem key={unit} value={unit}>
                      {unit}
                    </MenuItem>
                  ))}
                  {units.weight.map((unit) => (
                    <MenuItem key={unit} value={unit}>
                      {unit}
                    </MenuItem>
                  ))}
                  {units.temperature.map((unit) => (
                    <MenuItem key={unit} value={unit}>
                      {unit}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            onClick={convertUnits}
            fullWidth
            sx={{
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              backgroundColor: "#0288d1",
            }}
          >
            Convert
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UnitConverter;
