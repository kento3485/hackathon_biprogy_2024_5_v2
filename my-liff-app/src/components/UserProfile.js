// src/components/UserProfile.js
import React from 'react';
import { Container, Typography, Avatar, List, ListItem, ListItemText } from '@mui/material';
import { users } from '../data/dummyData';

const UserProfile = () => {
  const user = users[0]; // ダミーユーザーデータの取得

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
    </Container>
  );
};

export default UserProfile;
