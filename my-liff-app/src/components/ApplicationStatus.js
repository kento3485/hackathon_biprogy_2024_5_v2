// src/components/ApplicationStatus.js
import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Box, Paper } from '@mui/material';
import { applications } from '../data/dummyData';
import { useNavigate } from 'react-router-dom';

const ApplicationStatus = () => {
  const [appData, setAppData] = useState(applications);
  const navigate = useNavigate();

  const handleDelete = (rentalId) => {
    setAppData(appData.filter(app => app.rental_id !== rentalId));
  };

  const handleStatusChange = (rentalId, newStatus) => {
    setAppData(appData.map(app => app.rental_id === rentalId ? { ...app, status: newStatus } : app));
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h2" gutterBottom>現在のレンタル状況</Typography>
        <List>
          {appData.map((app) => (
            <ListItem key={app.rental_id} divider>
              <ListItemText
                primary={`レンタルID: ${app.rental_id}`}
                secondary={`開始日: ${app.start_date} | 状態: ${app.status}`}
              />
              {app.status === "応募失敗" || app.status === "貸出終了" ? (
                <Button variant="contained" color="secondary" onClick={() => handleDelete(app.rental_id)}>削除</Button>
              ) : app.status === "貸出待ち" ? (
                <Button variant="contained" color="primary" onClick={() => handleStatusChange(app.rental_id, "貸出中")}>貸出開始</Button>
              ) : app.status === "貸出中" ? (
                <Button variant="contained" color="primary" onClick={() => handleStatusChange(app.rental_id, "貸出終了")}>貸出終了</Button>
              ) : null}
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box display="flex" justifyContent="center" position="fixed" bottom={0} left={0} right={0} p={2} bgcolor="background.paper">
        <Button variant="contained" color="primary" onClick={() => navigate('/recruitment-list')}>戻る</Button>
      </Box>
    </Container>
  );
};

export default ApplicationStatus;
