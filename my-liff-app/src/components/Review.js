// src/components/Review.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box, Button } from '@mui/material';
import { evaluations } from '../data/dummyData';
import { useNavigate } from 'react-router-dom';

const Review = () => {
  const navigate = useNavigate();

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
      <Box display="flex" justifyContent="flex-end" position="fixed" bottom={0} left={0} right={0} p={2} bgcolor="background.paper">
        <Button variant="contained" color="primary" onClick={() => navigate('/recruitment-list')}>戻る</Button>
      </Box>
    </Container>
  );
};

export default Review;
