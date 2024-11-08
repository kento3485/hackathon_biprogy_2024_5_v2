import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box, AppBar, Toolbar, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getRental } from '../data/api';

const RecruitmentList = () => {
  const navigate = useNavigate();
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const rentalData = await getRental();
        setRentals(rentalData);
      } catch (error) {
        console.error("Failed to fetch rentals", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRentals();
  }, []);

  if (loading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            募集一覧
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {rentals.map((rental) => (
            <Grid item xs={12} sm={6} md={4} key={rental.id}>
              <Card elevation={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    種類: {rental.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    コメント: {rental.comment}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    期間: {rental.start_date} - {rental.end_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    費用: {rental.cost}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => navigate(`/rental-details/${rental.id}`)}>詳細</Button>
                  <Button size="small" variant="contained" color="primary" onClick={() => navigate(`/application-complete/${rental.id}`)}>応募</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: 'background.paper', py: 2, boxShadow: 3 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                startIcon={<AddCircleIcon />}
                variant="contained"
                color="primary"
                onClick={() => navigate('/create-recruitment')}
              >
                募集作成
              </Button>
            </Grid>
            <Grid item>
              <Button
                startIcon={<ListAltIcon />}
                variant="contained"
                color="primary"
                onClick={() => navigate('/application-status')}
              >
                レンタル状況
              </Button>
            </Grid>
            <Grid item>
              <Button
                startIcon={<SearchIcon />}
                variant="contained"
                color="primary"
                onClick={() => navigate('/search-settings')}
              >
                検索設定
              </Button>
            </Grid>
            <Grid item>
              <Button
                startIcon={<AccountCircleIcon />}
                variant="contained"
                color="primary"
                onClick={() => navigate('/user-profile')}
              >
                プロフィール
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default RecruitmentList;
