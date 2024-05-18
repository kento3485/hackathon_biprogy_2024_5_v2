// src/components/UserProfile.js
import React from 'react';
import { Container, Typography, Avatar, List, ListItem, ListItemText, Box, Button } from '@mui/material';
import { users } from '../data/dummyData';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const user = users[0]; // ダミーユーザーデータの取得
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h2" gutterBottom>ユーザープロフィール</Typography>
      <Avatar alt={user.name} src={user.icon} sx={{ width: 100, height: 100, marginBottom: 2 }} />
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
      <Box display="flex" justifyContent="flex-end" position="fixed" bottom={0} left={0} right={0} p={2} bgcolor="background.paper">
        <Button variant="contained" color="primary" onClick={() => navigate('/recruitment-list')}>戻る</Button>
      </Box>
    </Container>
  );
};

export default UserProfile;
