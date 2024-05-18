// src/components/SearchSettings.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchSettings = () => {
  const [type, setType] = useState('');
  const [cost, setCost] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // 検索ロジックをここに追加
    console.log('検索設定', { type, cost });
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>検索設定</Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          label="種類"
          fullWidth
          value={type}
          onChange={(e) => setType(e.target.value)}
          margin="normal"
        />
        <TextField
          label="費用"
          fullWidth
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSearch} sx={{ marginBottom: 2 }}>検索</Button>
      </Box>
      <Box display="flex" justifyContent="flex-end" position="fixed" bottom={0} left={0} right={0} p={2} bgcolor="background.paper">
        <Button variant="contained" color="primary" onClick={() => navigate('/recruitment-list')}>戻る</Button>
      </Box>
    </Container>
  );
};

export default SearchSettings;
