// src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Avatar, List, ListItem, ListItemText, Box, Button, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { initializeLiff, getProfile } from '../liff';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      await initializeLiff();
      const userProfile = await getProfile();
      setProfile(userProfile);
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  return (
    <Container>
      <Card elevation={3} sx={{ p: 3, mb: 3 }}>
        <CardContent>
          <Typography variant="h2" gutterBottom>ユーザープロフィール</Typography>
          <Box display="flex" justifyContent="center" mb={2}>
            <Avatar alt={profile.displayName} src={profile.pictureUrl} sx={{ width: 100, height: 100 }} />
          </Box>
          <List>
            <ListItem>
              <ListItemText primary={`名前: ${profile.displayName}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`ステータスメッセージ: ${profile.statusMessage}`} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="center" position="fixed" bottom={0} left={0} right={0} p={2} bgcolor="background.paper">
        <Button variant="contained" color="primary" onClick={() => navigate('/recruitment-list')}>戻る</Button>
      </Box>
    </Container>
  );
};

export default UserProfile;
