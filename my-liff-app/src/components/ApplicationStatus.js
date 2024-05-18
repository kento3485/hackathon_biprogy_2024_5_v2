// src/components/ApplicationStatus.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { applications } from '../data/dummyData';

const ApplicationStatus = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>現在のレンタル状況</Typography>
      <List>
        {applications.map((app, index) => (
          <ListItem key={index}>
            <ListItemText primary={`レンタルID: ${app.rental_id}, 状態: ${app.status}, 開始日: ${app.start_date}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ApplicationStatus;
