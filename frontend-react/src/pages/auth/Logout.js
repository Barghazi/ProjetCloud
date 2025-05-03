import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, CircularProgress } from '@mui/material';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        // Clear any stored tokens
        localStorage.removeItem('adminToken');
        localStorage.removeItem('userToken');
        
        // Redirect to home page after a short delay
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } catch (error) {
        console.error('Logout error:', error);
        navigate('/');
      }
    };

    logout();
  }, [navigate]);

  return (
    <Container sx={{ mt: 8, textAlign: 'center' }}>
      <CircularProgress sx={{ mb: 2 }} />
      <Typography variant="h6">
        Déconnexion en cours...
      </Typography>
    </Container>
  );
};

export default Logout; 