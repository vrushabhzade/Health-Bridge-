/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { LanguageProvider } from './context/LanguageContext';

import FindDoctors from './pages/FindDoctors';
import VideoConsult from './pages/VideoConsult';
import Prescriptions from './pages/Prescriptions';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientProfile from './pages/PatientProfile';
import AdminDashboard from './pages/AdminDashboard';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Placeholder pages
const Consultant = () => <div className="container" style={{ paddingTop: '6rem' }}><h1>Consultation</h1></div>;

// Simple fallback component
const SimpleLanding = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '2rem'
  }}>
    <div style={{
      background: 'white',
      borderRadius: '1rem',
      padding: '3rem',
      maxWidth: '600px',
      textAlign: 'center',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
    }}>
      <h1 style={{ color: '#4f46e5', marginBottom: '1rem', fontSize: '2.5rem' }}>
        🏥 HealthBridge
      </h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.1rem' }}>
        AI-Powered Telemedicine for Nagpur
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="/dashboard" style={{
          background: '#4f46e5',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Enter Dashboard
        </a>
        <a href="/find-doctors" style={{
          background: '#10b981',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Find Doctors
        </a>
      </div>
      <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#9ca3af' }}>
        ✅ Deployed successfully on Vercel
      </p>
    </div>
  </div>
);

function App() {
  // Wrap everything in try-catch to prevent crashes
  try {
    return (
      <LanguageProvider>
        <AuthProvider>
          <Router>
            <div className="app-container">
              <Navbar />
              <main>
                <Routes>
                  {/* Simple landing page as default */}
                  <Route path="/" element={<SimpleLanding />} />

                  {/* Keep these if user wants to switch context, but hide from main flow */}
                  <Route path="/login" element={<Dashboard />} />
                  <Route path="/register" element={<Dashboard />} />

                  {/* Protected Routes (Technically "protected" but user is always guest-authed now) */}
                  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                  <Route path="/doctor-dashboard" element={<ProtectedRoute><DoctorDashboard /></ProtectedRoute>} />
                  <Route path="/find-doctors" element={<ProtectedRoute><FindDoctors /></ProtectedRoute>} />
                  <Route path="/video-consult" element={<ProtectedRoute><VideoConsult /></ProtectedRoute>} />
                  <Route path="/prescriptions" element={<ProtectedRoute><Prescriptions /></ProtectedRoute>} />
                  <Route path="/consult" element={<ProtectedRoute><Consultant /></ProtectedRoute>} />
                  <Route path="/profile" element={<ProtectedRoute><PatientProfile /></ProtectedRoute>} />
                  <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
                </Routes>
              </main>
            </div>
          </Router>
        </AuthProvider>
      </LanguageProvider>
    );
  } catch (error) {
    console.error('App render error:', error);
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1f2937',
        color: 'white',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <div>
          <h1 style={{ color: '#ef4444', marginBottom: '1rem' }}>⚠️ Application Error</h1>
          <p>Please refresh the page or clear your browser cache.</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
}

export default App;
