// src/components/ApplicationComplete.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Avatar, List, ListItem, ListItemText } from '@mui/material';
import { applications, users, evaluations } from '../data/dummyData';

const ApplicationComplete = ({ match }) => {
  const navigate = useNavigate();
  const applicationId = parseInt(match.params.id);
  const application = applications.find(app => app.rental_id === applicationId);
  const user = users.find(u => u.id === application.applicant_id);
  const evaluation = evaluations.find(e => e.employee_id === application.applicant_id);

  if (!application || !user || !evaluation) {
    return <Container><Typography variant="h5">応募情報が見つかりません</Typography></Container>;
  }

  const handleBack = () => {
    navigate('/recruitment-list');
  };

  const handleCancel = () => {
    // 応募取り消しロジックをここに追加
    console.log('応募取り消し');
    navigate('/recruitment-list');
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>応募完了</Typography>
      <Box mb={2}>
        <Typography variant="h5">応募の詳細</Typography>
        <List>
          <ListItem>
            <ListItemText primary={`レンタルID: ${application.rental_id}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`開始日: ${application.start_date}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`状態: ${application.status}`} />
          </ListItem>
        </List>
      </Box>
      <Box mb={2}>
        <Typography variant="h5">貸出者のプロフィール</Typography>
        <Avatar alt={user.name} src={user.icon} sx={{ width: 100, height: 100, marginBottom: 2 }} />
        <List>
          <ListItem>
            <ListItemText primary={`名前: ${user.name}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`電話番号: ${user.call_num}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`住所: ${user.address}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`メールアドレス: ${user.mail_address}`} />
          </ListItem>
        </List>
      </Box>
      <Box mb={2}>
        <Typography variant="h5">評価</Typography>
        <List>
          <ListItem>
            <ListItemText primary={`評価値: ${evaluation.evaluation}`} />
          </ListItem>
        </List>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="primary" onClick={handleBack}>戻る</Button>
        <Button variant="contained" color="secondary" onClick={handleCancel}>応募取り消し</Button>
      </Box>
    </Container>
  );
};

export default ApplicationComplete;
