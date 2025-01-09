import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import PatientManagement from '../components/PatientManagement.js';
import DietChartManagement from '../components/DietChartManagement.js';
import PantryManagement from '../components/PantryManagement.js';
import MealTracking from '../components/MealTracking.js';

const HospitalManagerDashboard = () => (
  <Container maxWidth="lg">
    <Typography variant="h4" gutterBottom sx={{ marginTop: 3 }}>
      Hospital Food Manager Dashboard
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <PatientManagement />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <DietChartManagement />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <PantryManagement />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <MealTracking />
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

export default HospitalManagerDashboard;