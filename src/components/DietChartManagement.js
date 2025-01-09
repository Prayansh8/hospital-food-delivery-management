import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';

const DietChartManagement = () => {
  const [mealPlan, setMealPlan] = useState({ morning: '', evening: '', night: '' });

  const handleChange = (e) => {
    setMealPlan({ ...mealPlan, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Implement save functionality
    alert('Meal plan saved!');
  };

  return (
    <div>
      <Typography variant="h6">Create Diet Chart</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Morning Meal Plan"
            name="morning"
            value={mealPlan.morning}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Evening Meal Plan"
            name="evening"
            value={mealPlan.evening}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Night Meal Plan"
            name="night"
            value={mealPlan.night}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" onClick={handleSave}>Save Diet Chart</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default DietChartManagement;