// src/components/RecruitmentList.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { rentals } from '../data/dummyData';
import { Link } from 'react-router-dom';

const RecruitmentList = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>募集一覧</Typography>
      <List>
        {rentals.map((rental) => (
          <ListItem key={rental.id} component={Link} to={`/rental-details/${rental.id}`} button>
            <ListItemText
              primary={`種類: ${rental.type}`}
              secondary={`コメント: ${rental.comment} | 費用: ${rental.cost} | 期間: ${rental.start_date} - ${rental.end_date}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default RecruitmentList;
