// src/components/RentalDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import { rentals } from '../data/dummyData';

const RentalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const rentalId = parseInt(id);
  const rental = rentals.find(r => r.id === rentalId);

  if (!rental) {
    return <Container><Typography variant="h5">レンタル情報が見つかりません</Typography></Container>;
  }

  return (
    <Container>
      <Typography variant="h2" gutterBottom>レンタル詳細</Typography>
      <Box mb={2}>
        <Typography variant="body1">種類: {rental.type}</Typography>
        <Typography variant="body1">コメント: {rental.comment}</Typography>
        <Typography variant="body1">開始日: {rental.start_date}</Typography>
        <Typography variant="body1">終了日: {rental.end_date}</Typography>
        <Typography variant="body1">費用: {rental.cost}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="primary" onClick={() => navigate('/recruitment-list')}>戻る</Button>
        <Button variant="contained" color="secondary" onClick={() => navigate(`/application-complete/${rental.id}`)}>応募する</Button>
      </Box>
    </Container>
  );
};

export default RentalDetails;
