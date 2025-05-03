import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Box,
  Button,
  Chip,
} from '@mui/material';
import { api } from '../../api';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await api.get('/api/rooms');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  const filteredRooms = rooms.filter(room =>
    room.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Rechercher une salle"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 2 }}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredRooms.map((room) => (
          <Grid item xs={12} sm={6} md={4} key={room.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: 6,
                },
              }}
              onClick={() => navigate(`/rooms/${room.id}`)}
            >
              <CardMedia
                component="img"
                height="200"
                image={room.image || '/default-room.jpg'}
                alt={room.nom}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {room.nom}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {room.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RoomList; 