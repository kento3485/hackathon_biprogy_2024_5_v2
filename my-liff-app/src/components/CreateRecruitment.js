import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Paper, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createRecruitment } from '../data/api';

const CreateRecruitment = () => {
  const [type, setType] = useState('');
  const [comment, setComment] = useState('');
  const [cost, setCost] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  const handleCreate = async () => {
    const data = {
      type,
      comment,
      cost,
      start_date: startDate,
      end_date: endDate,
    };

    try {
      await createRecruitment(data);
      console.log('募集作成成功:', data);
      navigate('/recruitment-list');
    } catch (error) {
      console.error('募集作成失敗:', error);
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h2" gutterBottom>募集作成</Typography>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="type-label">種類</InputLabel>
                <Select
                  labelId="type-label"
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  label="種類"
                >
                  <MenuItem value="車">車</MenuItem>
                  <MenuItem value="自転車">自転車</MenuItem>
                  <MenuItem value="駐車場">駐車場</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="コメント"
                fullWidth
                value={comment}
                onChange={(e) => setComment(e.target.value)}
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
            <Grid item xs={12}>
              <TextField
                label="開始日"
                type="date"
                fullWidth
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="終了日"
                type="date"
                fullWidth
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button variant="contained" color="primary" onClick={handleCreate} sx={{ marginRight: 2 }}>募集作成</Button>
            <Button variant="contained" color="primary" onClick={() => navigate('/recruitment-list')}>戻る</Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateRecruitment;
