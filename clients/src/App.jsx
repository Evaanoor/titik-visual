import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    
      <main>
        <Outlet /> 
      </main>
      
    </div>
  );
}

export default App;