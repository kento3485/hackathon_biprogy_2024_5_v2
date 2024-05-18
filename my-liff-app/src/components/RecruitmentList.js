// src/components/RecruitmentList.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box, BottomNavigation, BottomNavigationAction, Button } from '@mui/material';
import { rentals } from '../data/dummyData';
import { Link, useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GradeIcon from '@mui/icons-material/Grade';

const RecruitmentList = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h2" gutterBottom>募集一覧</Typography>
      <List>
        {rentals.map((rental) => (
          <ListItem key={rental.id} divider>
            <ListItemText
              primary={`種類: ${rental.type}`}
              secondary={`コメント: ${rental.comment} | 費用: ${rental.cost} | 期間: ${rental.start_date} - ${rental.end_date}`}
            />
            <Button variant="contained" color="primary" onClick={() => navigate(`/application-complete/${rental.id}`)}>応募</Button>
          </ListItem>
        ))}
      </List>
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation
          showLabels
          onChange={(event, newValue) => {
            navigate(newValue);
          }}
        >
          <BottomNavigationAction label="募集作成" value="/create-recruitment" icon={<AddCircleIcon />} />
          <BottomNavigationAction label="レンタル状況" value="/application-status" icon={<ListAltIcon />} />
          <BottomNavigationAction label="検索設定" value="/search-settings" icon={<SearchIcon />} />
          <BottomNavigationAction label="プロフィール" value="/user-profile" icon={<AccountCircleIcon />} />
          <BottomNavigationAction label="評価" value="/review" icon={<GradeIcon />} />
        </BottomNavigation>
      </Box>
    </Container>
  );
};

export default RecruitmentList;
