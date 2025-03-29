import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Signup.css';

const SignUp = () => {
  const navigate = useNavigate();
  
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    termsAccepted: false,
    newsletter: false
  });
  
  
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id === 'first-name' ? 'firstName' : 
       id === 'last-name' ? 'lastName' : 
       id]: type === 'checkbox' ? checked : value
    }));
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    
    const emailExists = existingUsers.some(user => user.email === formData.email);
    
    if (emailExists) {
      
      Swal.fire({
        title: 'Account Already Exists',
        text: 'An account with this email already exists. Redirecting you to login...',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Go to Login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        } else {
          navigate('/login');
        }
      });
      return;
    }
    
    
    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password, 
      newsletter: formData.newsletter,
      createdAt: new Date().toISOString()
    };
    
    
    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
    
    // Clear the form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      termsAccepted: false,
      newsletter: false
    });
    
    
    Swal.fire({
      title: 'Success!',
      text: 'Account created successfully!',
      icon: 'success',
      confirmButtonText: 'Go to Login'
    }).then(() => {
      navigate('/login');
    });
  };
  
  return (
    <div className='signup'>
      <div className="logo-header">PathFinder</div>
  
      <div className="signup-container">
        <div className="signup-header">
          <h1>Create Your Account</h1>
          <p>Start your career journey with PathFinder</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input 
                type="text" 
                id="first-name" 
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input 
                type="text" 
                id="last-name" 
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
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
            
            <div className="password-strength">
              <div className={`strength-bar weak ${formData.password.length > 0 ? 'active' : ''}`}></div>
              <div className={`strength-bar medium ${formData.password.length >= 6 ? 'active' : ''}`}></div>
              <div className={`strength-bar strong ${formData.password.length >= 8 && 
                /[A-Z]/.test(formData.password) && 
                /[0-9]/.test(formData.password) ? 'active' : ''}`}></div>
            </div>
          </div>
          
          <div className="checkbox-group">
            <input 
              type="checkbox" 
              id="terms" 
              checked={formData.termsAccepted}
              onChange={(e) => setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }))}
              required
            />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>
          
          <div className="checkbox-group">
            <input 
              type="checkbox" 
              id="newsletter" 
              checked={formData.newsletter}
              onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e.target.checked }))}
            />
            <label htmlFor="newsletter">
              Send me career tips, updates, and special offers
            </label>
          </div>
          
          <button type="submit" className="signup-button">Create Account</button>
        </form>
        
        <div className="divider">or sign up with</div>
        
        <div className="social-signup">
          <button className="social-btn">G</button>
          <button className="social-btn">f</button>
          <button className="social-btn">in</button>
        </div>
        
        <div className="login-prompt">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;