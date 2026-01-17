import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import TestSeries from './components/testseries/TestSeries';
import UPSCPage from './pages/UPSCPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import DashboardPage from './pages/DashboardPage';
import './index.css';

// Create a wrapper component for the app content that requires AuthProvider
const AppContent = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Courses />
              <TestSeries />
            </>
          } />

          {/* Public Page Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/test-series" element={<TestSeries />} />
          <Route path="/upsc" element={<UPSCPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={
            user ? <Navigate to="/dashboard" replace /> : <LoginPage />
          } />
          <Route path="/signup" element={
            user ? <Navigate to="/dashboard" replace /> : <SignupPage />
          } />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />
          
          {/* 404 Route - Keep this at the bottom */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">Page not found</p>
                <a 
                  href="/" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Go back home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold">NEXT IAS</h3>
          <p className="text-gray-400 mt-2">&copy; {new Date().getFullYear()} Next IAS. All rights reserved.</p>
          
          {!user && (
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Ready to start your UPSC journey?{' '}
                <a href="/signup" className="text-blue-400 hover:text-blue-300">Create an account</a>
              </p>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

// Main App component that wraps everything with AuthProvider
function App() {
  return (
    <ThemeProvider>
      <Router>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;