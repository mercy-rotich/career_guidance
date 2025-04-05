import React, { useState } from 'react';
import './CareerCard.css';

export const CareerCard = ({ career }) => {
  const [isSaved, setIsSaved] = useState(false);
  
  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
  };
  
  // Determine growth indicator icon and text
  const getGrowthIndicator = (growth) => {
    if (growth >= 15) {
      return { icon: '↗', text: 'Faster than average', className: 'high-growth' };
    } else if (growth >= 5) {
      return { icon: '→', text: 'Average', className: 'medium-growth' };
    } else {
      return { icon: '↘', text: 'Slower than average', className: 'low-growth' };
    }
  };
  
  const growthData = getGrowthIndicator(career.growthRate);
  
  return (
    <div className="career-card">
      <div className="card-header">
        <span>{career.category}</span>
        <span className="salary-range">{career.salaryRange}</span>
      </div>
      <div className="card-content">
        <h3 className="career-title">{career.title}</h3>
        <div className={`growth-indicator ${growthData.className}`}>
          <span>{growthData.icon}</span>
          <span>{career.growthRate}% Growth ({growthData.text})</span>
        </div>
        <p className="career-description">
          {career.description}
        </p>
        <div className="skills-required">
          <div className="skills-title">Top Skills Required</div>
          <div className="skills-list">
            {career.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="card-actions">
          <button className="card-action-btn primary-action">Explore Career</button>
          <button 
            className={`card-action-btn secondary-action ${isSaved ? 'saved' : ''}`}
            onClick={handleSaveToggle}
          >
            {isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};