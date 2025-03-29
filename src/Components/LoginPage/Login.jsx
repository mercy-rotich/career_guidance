import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
   
    const user = users.find(user => user.email === formData.email);
    

    if (!user) {
      Swal.fire({
        title: 'Account Not Found',
        text: 'No account found with this email. Would you like to sign up instead?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sign Up',
        cancelButtonText: 'Try Again'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signup');
        }
      });
      return;
    }
    
    if (user.password !== formData.password) {
      Swal.fire({
        title: 'Incorrect Password',
        text: 'The password you entered is incorrect.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      return;
    }
    
    
    Swal.fire({
      title: 'Success!',
      text: `Welcome back, ${user.firstName}!`,
      icon: 'success',
      confirmButtonText: 'Continue'
    }).then(() => {
      
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      
      navigate('/');
    });
  };
  
  return (
    <div className="login">
      <div className="logo-header">PathFinder</div>
  
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Log in to continue your career journey</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="you@example.com" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          
          <button type="submit" className="login-button">Log In</button>
        </form>
        
        <div className="divider">or continue with</div>
        
        <div className="social-login">
          <button className="social-btn">G</button>
          <button className="social-btn">f</button>
          <button className="social-btn">in</button>
        </div>
        
        <div className="signup-prompt">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;