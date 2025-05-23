import React from 'react';
import Login from './Components/LoginPage/Login';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './Components/SignupPage/SignUp';
import Navbar from './Components/Common/Navbar/Navbar';
import CareerExplorer from './Components/Pages/CareerExplorer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path="/careerexplorer" element={<CareerExplorer />} />
        <Route path="/" element={<Navigate to="/login" replace />} />  
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </div>
  );
};

export default App;