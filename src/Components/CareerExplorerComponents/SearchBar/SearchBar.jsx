import React, { useState } from 'react';
import './SearchBar.css';

export const SearchBar = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState('');
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };
  
  return (
    <div className="search-container">
      <h1>Career Explorer</h1>
      <input 
        type="search" 
        placeholder="Search careers, skills, or industries..." 
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};