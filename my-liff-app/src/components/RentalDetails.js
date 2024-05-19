// src/components/RentalDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Card, CardContent, CardActions } from '@mui/material';
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
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card elevation={6}>
        <CardContent>
          <Typography variant="h2" gutterBottom>レンタル詳細</Typography>
          <Box mb={2}>
            <Typography variant="h5" component="div">種類</Typography>
            <Typography variant="body1">{rental.type}</Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="h5" component="div">コメント</Typography>
            <Typography variant="body1">{rental.comment}</Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="h5" component="div">期間</Typography>
            <Typography variant="body1">{rental.start_date} - {rental.end_date}</Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="h5" component="div">費用</Typography>
            <Typography variant="body1">{rental.cost}</Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="large" variant="contained" color="primary" onClick={() => navigate('/recruitment-list')}>戻る</Button>
          <Button size="large" variant="contained" color="secondary" onClick={() => navigate(`/application-complete/${rental.id}`)}>応募する</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default RentalDetails;
