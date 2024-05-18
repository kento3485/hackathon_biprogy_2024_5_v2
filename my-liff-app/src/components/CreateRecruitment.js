// src/components/CreateRecruitment.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreateRecruitment = () => {
  const [type, setType] = useState('');
  const [comment, setComment] = useState('');
  const [cost, setCost] = useState('');
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();

  const handleCreate = () => {
    // ダミーデータに新しい募集を追加する処理
    console.log('募集作成', { type, comment, cost, duration });
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>募集作成</Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          label="種類"
          fullWidth
          value={type}
          onChange={(e) => setType(e.target.value)}
          margin="normal"
        />
        <TextField
          label="コメント"
          fullWidth
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          margin="normal"
        />
        <TextField
          label="費用"
          fullWidth
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          margin="normal"
        />
        <TextField
          label="期間"
          fullWidth
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleCreate} sx={{ marginBottom: 2 }}>募集作成</Button>
      </Box>
      <Box display="flex" justifyContent="flex-end" position="fixed" bottom={0} left={0} right={0} p={2} bgcolor="background.paper">
        <Button variant="contained" color="primary" onClick={() => navigate('/recruitment-list')}>戻る</Button>
      </Box>
    </Container>
  );
};

export default CreateRecruitment;
