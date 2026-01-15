import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Careers from './pages/Careers.jsx';
import ProgramMagang from './pages/ProgramMagang.jsx';
import LowonganKerja from './pages/LowonganKerja.jsx';
import DetailLayananUIUX from './pages/DetailLayananUIUX.jsx';
import DetailLayananWebDev from './pages/DetailLayananWebDev.jsx';
import DetailLayananLogoDesign from './pages/DetailLayananLogoDesign.jsx';
import DetailLayananSocialMedia from './pages/DetailLayananSosmed.jsx';
import DetailLayananMerchandise from './pages/DetailLayananMerchandise.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import AdminMessages from './pages/admin/AdminMessages.jsx';
import AdminPortfolio from './pages/admin/AdminPortfolio.jsx';
import AdminJobs from './pages/admin/AdminJobs.jsx';
import AdminPortfolioForm from './pages/admin/AdminPortfolioForm.jsx';
import AdminJobForm from './pages/admin/AdminJobForm.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';


import './index.css';
import ErrorBoundary from './components/ErrorBoundary.jsx';

// Base URL for backend API. Set via Vite env: VITE_API_URL
// Fallback to http://127.0.0.1:8000 for local dev.
// Use VITE_API_URL when provided; fall back to localhost for dev.
// Provide a clear default for local development
window.__API_BASE__ = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

const router = createBrowserRouter([
  {
    path: '/',          
    element: <App />,   
    children: [
      {
        path: '/', 
        element: <Homepage />, 
      },
      {
        path: '/about', 
        element: <About />, 
      },
      {
        path: '/services', 
        element: <Services />, 
      },
      {
        path: '/portfolio', 
        element: <Portfolio />, 
      },
      {
        path: '/contact', 
        element: <Contact />, 
      },
      {
        path: '/careers', 
        element: <Careers />, 
      },
      {
        path: '/program-magang', 
        element: <ProgramMagang />, 
      },
      {
        path: '/lowongan-kerja', 
        element: <LowonganKerja />, 
      },
      {
        path: '/layanan/ui-ux', 
        element: <DetailLayananUIUX />, 
      },
      {
        path: '/layanan/web-dev', 
        element: <DetailLayananWebDev />, 
      },
      {
        path: '/layanan/logo', 
        element: <DetailLayananLogoDesign />, 
      },
      {
        path: '/layanan/sosmed', 
        element: <DetailLayananSocialMedia />, 
      },
      {
        path: '/layanan/merch', 
        element: <DetailLayananMerchandise />, 
      },
      {
        path: '/login', 
        element: <LoginPage />
      },
      { 
        path: '/admin/dashboard', 
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>
      },
      { 
        path: '/admin/messages', 
        element: <ProtectedRoute><AdminMessages /></ProtectedRoute>
      },
      { 
        path: '/admin/portfolio', 
        element: <ProtectedRoute><AdminPortfolio /></ProtectedRoute>
      },
      { 
        path: '/admin/portfolio/add', 
        element: <ProtectedRoute><AdminPortfolioForm /></ProtectedRoute>
      },
      { 
        path: '/admin/portfolio/edit/:id', 
        element: <ProtectedRoute><AdminPortfolioForm /></ProtectedRoute>
      },
      { 
        path: '/admin/jobs', 
        element: <ProtectedRoute><AdminJobs /></ProtectedRoute>
      },
      { 
        path: '/admin/jobs/add', 
        element: <ProtectedRoute><AdminJobForm /></ProtectedRoute>
      },
      { 
        path: '/admin/jobs/edit/:id', 
        element: <ProtectedRoute><AdminJobForm /></ProtectedRoute>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </AuthProvider>
  </React.StrictMode>
);
