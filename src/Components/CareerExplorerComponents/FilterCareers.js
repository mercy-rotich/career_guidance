/**
 * Filter careers based on search term and category filter
 * @param {Array} careers - Array of career objects
 * @param {String} searchTerm - Search term to filter by
 * @param {String} categoryFilter - Category to filter by
 * @returns {Array} - Filtered array of careers
 */
export const filterCareers = (careers, searchTerm, categoryFilter) => {
    // If no search term or filter, return all careers
    if (!searchTerm && categoryFilter === 'All Fields') {
      return careers;
    }
    
    return careers.filter(career => {
      // Check if career matches category filter
      const matchesCategory = categoryFilter === 'All Fields' || career.category === categoryFilter;
      
      // If no search term, just check category
      if (!searchTerm) {
        return matchesCategory;
      }
      
      // Convert search term to lowercase for case-insensitive search
      const search = searchTerm.toLowerCase();
      
      // Check if any career fields match the search term
      const matchesTitle = career.title.toLowerCase().includes(search);
      const matchesCategoryText = career.category.toLowerCase().includes(search);
      const matchesDescription = career.description.toLowerCase().includes(search);
      
      // Check if any skills match the search term
      const matchesSkills = career.skills.some(skill => 
        skill.toLowerCase().includes(search)
      );
      
      // Return true if matches category filter AND any of the search criteria
      return matchesCategory && (matchesTitle || matchesCategoryText || matchesDescription || matchesSkills);
    });
  };
  
  /**
   * Get unique categories from careers data
   * @param {Array} careers - Array of career objects
   * @returns {Array} - Array of unique category strings
   */
  export const getUniqueCategories = (careers) => {
    const categories = careers.map(career => career.category);
    return ['All Fields', ...new Set(categories)];
  };
  
  /**
   * Sort careers by specified field
   * @param {Array} careers - Array of career objects
   * @param {String} sortField - Field to sort by (e.g., 'title', 'growthRate')
   * @param {Boolean} ascending - Sort ascending or descending
   * @returns {Array} - Sorted array of careers
   */
  export const sortCareers = (careers, sortField, ascending = true) => {
    return [...careers].sort((a, b) => {
      if (ascending) {
        return a[sortField] > b[sortField] ? 1 : -1;
      } else {
        return a[sortField] < b[sortField] ? 1 : -1;
      }
    });
  };