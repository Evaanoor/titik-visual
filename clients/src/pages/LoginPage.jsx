
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext.jsx'; 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login gagal');
      }

      
      
      login(data.access_token, data.user);
      
      
      navigate('/admin/dashboard');

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white px-10 py-10 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Login</h2>
        <p className="text-gray-600 text-sm mb-8">Masuk untuk mengelola website Titik Visual</p>
        
        {error && <div className="bg-red-100 text-red-600 px-3 py-2 rounded-lg mb-6 text-sm font-medium">{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div className="mb-6 text-left">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              placeholder="admin@titikvisual.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <div className="mb-6 text-left">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              placeholder="********"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          
          <button type="submit" disabled={isLoading} className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg cursor-pointer transition-opacity disabled:opacity-70 disabled:cursor-not-allowed">
            {isLoading ? 'Loading...' : 'Masuk'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;