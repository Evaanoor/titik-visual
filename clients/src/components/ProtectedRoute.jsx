import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function ProtectedRoute({ children }) {
  const { token } = useAuth();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsChecking(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  
  if (isChecking) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  
  console.log('[ProtectedRoute] Token:', token ? 'EXISTS' : 'NOT FOUND');

  
  if (!token) {
    console.log('[ProtectedRoute] Redirecting to /login');
    return <Navigate to="/login" replace />;
  }

  
  console.log('[ProtectedRoute] Access granted');
  return children;
}

export default ProtectedRoute;
