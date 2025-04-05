import React from 'react';
import './FilterTabs.css';

export const FilterTabs = ({ activeFilter, onFilterChange }) => {
  const filters = [
    'All Fields',
    'Technology',
    'Healthcare',
    'Business',
    'Creative',
    'Education',
    'Science',
    'Trade Skills'
  ];
  
  return (
    <div className="filters">
      {filters.map(filter => (
        <div 
          key={filter} 
          className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </div>
      ))}
      <div className="filter-pill">
        Filter <span>+</span>
      </div>
    </div>
  );
};