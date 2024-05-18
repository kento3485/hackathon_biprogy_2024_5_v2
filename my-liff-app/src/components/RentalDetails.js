// src/components/RentalDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { rentals } from '../data/dummyData';

const RentalDetails = () => {
  const { id } = useParams();  // useParams フックを使用して URL パラメータを取得
  const rentalId = parseInt(id);
  const rental = rentals.find(r => r.id === rentalId);

  if (!rental) {
    return <Container><Typography variant="h5">レンタル情報が見つかりません</Typography></Container>;
  }

  return (
    <Container>
      <Typography variant="h2" gutterBottom>レンタル詳細</Typography>
      <Box>
        <Typography variant="body1">種類: {rental.type}</Typography>
        <Typography variant="body1">コメント: {rental.comment}</Typography>
        <Typography variant="body1">開始日: {rental.start_date}</Typography>
        <Typography variant="body1">終了日: {rental.end_date}</Typography>
        <Typography variant="body1">費用: {rental.cost}</Typography>
      </Box>
    </Container>
  );
};

export default RentalDetails;
