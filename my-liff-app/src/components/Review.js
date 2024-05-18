// src/components/Review.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { evaluations } from '../data/dummyData';

const Review = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>評価</Typography>
      <List>
        {evaluations.map((evaluation, index) => (
          <ListItem key={index}>
            <ListItemText primary={`評価値: ${evaluation.evaluation}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Review;
