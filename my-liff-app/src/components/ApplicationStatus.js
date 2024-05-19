// src/components/ApplicationStatus.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Box, Paper, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getApplication } from '../data/api';

const ApplicationStatus = () => {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      const applicationData = await getApplication();
      setApplications(applicationData);
    };

    fetchApplications();
  }, []);

  const handleDelete = (rentalId) => {
    setApplications(applications.filter(app => app.rental_id !== rentalId));
  };

  const handleStatusChange = (rentalId, newStatus) => {
    setApplications(applications.map(app => app.rental_id === rentalId ? { ...app, status: newStatus } : app));
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            現在のレンタル状況
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h2" gutterBottom>現在のレンタル状況</Typography>
          <List>
            {applications.map((app) => (
              <Paper key={app.rental_id} elevation={1} sx={{ mb: 2, p: 2 }}>
                <ListItem>
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
              </Paper>
            ))}
          </List>
        </Paper>
        <Box display="flex" justifyContent="center" position="fixed" bottom={0} left={0} right={0} p={2} bgcolor="background.paper">
          <Button variant="contained" color="primary" onClick={() => navigate('/recruitment-list')}>戻る</Button>
        </Box>
      </Container>
    </>
  );
};

export default ApplicationStatus;
