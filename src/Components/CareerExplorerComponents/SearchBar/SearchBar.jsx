import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <div className="page-header">
        <h1>Career Explorer</h1>
        <div className="search-container">
          <input type="search" placeholder="Search careers, skills, or industries..."/>
        </div>
      </div>
    </div>
  )
}

export default SearchBar