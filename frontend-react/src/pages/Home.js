import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Bienvenue sur Room Booking System
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
            Réservez vos salles de réunion en toute simplicité
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/rooms')}
            >
              Voir les salles disponibles
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/bookings')}
            >
              Mes réservations
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home; 