import React from 'react'
import './CareerExplorer.css'
import SearchBar from '../CareerExplorerComponents/SearchBar/SearchBar'
import FilterTabs from '../CareerExplorerComponents/FilterTabs/FilterTabs'

const CareerExplorer = () => {
  return (
    <div className='career-explorer-container'>
      <SearchBar/>
      <FilterTabs/>
    </div>
  )
}

export default CareerExplorer
