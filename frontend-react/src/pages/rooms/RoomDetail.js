import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import { api } from '../../api';

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await api.get(`/api/rooms/${id}`);
        setRoom(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching room:', error);
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (!room) {
    return (
      <Container>
        <Typography>Room not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
              {room.nom}
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Chip
                label={`Capacité: ${room.capacite} personnes`}
                color="primary"
                variant="outlined"
                sx={{ mr: 1 }}
              />
              <Chip
                label={room.type}
                color="secondary"
                variant="outlined"
              />
            </Box>
            <Typography variant="body1" paragraph>
              {room.description}
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h6" gutterBottom>
              Équipements
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {room.equipements.map((equipment, index) => (
                <Chip
                  key={index}
                  label={equipment}
                  variant="outlined"
                />
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>
              Réserver cette salle
            </Typography>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate(`/rooms/${id}/book`)}
              sx={{ mt: 2 }}
            >
              Réserver maintenant
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RoomDetail; 