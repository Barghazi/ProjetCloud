import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RoomList from './pages/rooms/RoomList';
import RoomDetail from './pages/rooms/RoomDetail';
import BookingHistory from './pages/bookings/BookingHistory';
import AdminDashboard from './pages/admin/Dashboard';
import AdminLogin from './pages/admin/AdminLogin';
import Logout from './pages/auth/Logout';
import Settings from './pages/Settings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/rooms/:id/book" element={<RoomDetail />} />
          <Route path="/bookings" element={<BookingHistory />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;