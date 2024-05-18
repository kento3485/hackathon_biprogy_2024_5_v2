// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>ホーム</Typography>
      <nav>
        <List>
          <ListItem button component={Link} to="/create-recruitment">
            <ListItemText primary="募集作成" />
          </ListItem>
          <ListItem button component={Link} to="/application-status">
            <ListItemText primary="現在のレンタル状況" />
          </ListItem>
          <ListItem button component={Link} to="/user-profile">
            <ListItemText primary="ユーザープロフィール" />
          </ListItem>
          <ListItem button component={Link} to="/rental-details/1">
            <ListItemText primary="レンタル詳細 (ID: 1)" />
          </ListItem>
          <ListItem button component={Link} to="/search-settings">
            <ListItemText primary="検索設定" />
          </ListItem>
          <ListItem button component={Link} to="/review">
            <ListItemText primary="評価" />
          </ListItem>
        </List>
      </nav>
    </Container>
  );
};

export default Home;
