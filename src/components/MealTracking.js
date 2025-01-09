import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';

const initialMealData = [
  { time: 'Morning', status: 'Pending' },
  { time: 'Evening', status: 'In Progress' },
  { time: 'Night', status: 'Delivered' },
];

const MealTracking = () => {
  const [meals, setMeals] = useState(initialMealData);

  const updateStatus = (index, newStatus) => {
    const updatedMeals = meals.map((meal, i) => (i === index ? { ...meal, status: newStatus } : meal));
    setMeals(updatedMeals);
  };

  return (
    <div>
      <Typography variant="h6">Meal Tracking</Typography>
      <List>
        {meals.map((meal, index) => (
          <ListItem key={meal.time}>
            <ListItemText primary={meal.time} secondary={`Status: ${meal.status}`} />
            {meal.status !== 'Delivered' && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => updateStatus(index, 'Delivered')}
              >
                Mark as Delivered
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MealTracking;