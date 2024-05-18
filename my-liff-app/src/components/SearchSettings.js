// src/components/SearchSettings.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Grid } from '@mui/material';
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
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h2" gutterBottom>検索設定</Typography>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="種類"
                fullWidth
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="費用"
                fullWidth
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button variant="contained" color="primary" onClick={handleSearch} sx={{ marginRight: 2 }}>検索</Button>
            <Button variant="contained" color="primary" onClick={() => navigate('/recruitment-list')}>戻る</Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default SearchSettings;
