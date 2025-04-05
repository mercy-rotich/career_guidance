import React, { useState } from 'react';
import { SearchBar } from '../CareerExplorerComponents/SearchBar/SearchBar';
import { FilterTabs } from '../CareerExplorerComponents/FilterTabs/FilterTabs';
import { CareerCategoryList } from '../CareerExplorerComponents/CareerCategoryList/CareerCategoryList';

import { careers } from '../CareerExplorerComponents/careers';
import { filterCareers } from '../CareerExplorerComponents/FilterCareers';

const CareerExplorer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Fields');
  const [currentPage, setCurrentPage] = useState(1);
  const careersPerPage = 6;
  
  // Filter careers based on search term and active filter
  const filteredCareers = filterCareers(careers, searchTerm, activeFilter);
  
  // Calculate pagination
  const indexOfLastCareer = currentPage * careersPerPage;
  const indexOfFirstCareer = indexOfLastCareer - careersPerPage;
  const currentCareers = filteredCareers.slice(indexOfFirstCareer, indexOfLastCareer);
  const totalPages = Math.ceil(filteredCareers.length / careersPerPage);
  
  // Handle search change
  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page when search changes
  };
  
  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.min(totalPages, 5); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div className='career-explorer'>
      <div className="page-header">
        <SearchBar onSearchChange={handleSearchChange} />
      </div>
      
      <FilterTabs 
        activeFilter={activeFilter} 
        onFilterChange={handleFilterChange} 
      />
      
      <CareerCategoryList 
        careers={currentCareers} 
      />
      
      {totalPages > 1 && (
        <div className="pagination">
          {pageNumbers.map(number => (
            <div 
              key={number}
              className={`page-number ${currentPage === number ? 'active' : ''}`}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </div>
          ))}
          {totalPages > 5 && (
            <div 
              className="page-number"
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            >
              →
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CareerExplorer;