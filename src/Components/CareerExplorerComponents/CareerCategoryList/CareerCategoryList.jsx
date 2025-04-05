import React from 'react';
import { CareerCard } from '../CareeerCards/CareerCard';

export const CareerCategoryList = ({ careers }) => {
  return (
    <div className="cards-grid">
      {careers.length > 0 ? (
        careers.map(career => (
          <CareerCard 
            key={career.id} 
            career={career} 
          />
        ))
      ) : (
        <div className="no-results">
          <h3>No careers found matching your criteria</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};