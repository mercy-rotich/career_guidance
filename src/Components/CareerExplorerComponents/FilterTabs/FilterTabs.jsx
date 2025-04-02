import React from 'react'
import './FilterTabs.css'

const FilterTabs = () => {
  return (
    <div>
      <div class="filters">
      <div class="filter-pill active">All Fields</div>
      <div class="filter-pill">Technology</div>
      <div class="filter-pill">Healthcare</div>
      <div class="filter-pill">Business</div>
      <div class="filter-pill">Creative</div>
      <div class="filter-pill">Education</div>
      <div class="filter-pill">Science</div>
      <div class="filter-pill">Trade Skills</div>
      <div class="filter-pill">Filter <span>+</span></div>
    </div>
    </div>
  )
}

export default FilterTabs
