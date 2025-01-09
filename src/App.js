import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HospitalManagerDashboard from './pages/HospitalManagerDashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ResponsiveNavBar from './components/ResponsiveNavBar';
import { AuthProvider } from './context/AuthContext';

const App = () => (
  <AuthProvider>
    <Router>
      <ResponsiveNavBar />
      <Routes>
        <Route path="/" element={<HospitalManagerDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;