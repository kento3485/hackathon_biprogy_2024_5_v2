// src/components/UserProfile.js
import React from 'react';
import { Container, Typography, Avatar, List, ListItem, ListItemText, Box, Button, Paper } from '@mui/material';
import { users } from '../data/dummyData';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const user = users[0]; // ダミーユーザーデータの取得
  const navigate = useNavigate();

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h2" gutterBottom>ユーザープロフィール</Typography>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar alt={user.name} src={user.icon} sx={{ width: 100, height: 100 }} />
        </Box>
        <List>
          <ListItem>
            <ListItemText primary={`名前: ${user.name}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`電話番号: ${user.call_num}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`住所: ${user.address}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`メールアドレス: ${user.mail_address}`} />
          </ListItem>
        </List>
      </Paper>
      <Box display="flex" justifyContent="center" position="fixed" bottom={0} left={0} right={0} p={2} bgcolor="background.paper">
        <Button variant="contained" color="primary" onClick={() => navigate('/recruitment-list')}>戻る</Button>
      </Box>
    </Container>
  );
};

export default UserProfile;
