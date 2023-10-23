import React from 'react'
import "./filter-input.css"

const FilterInput = () => {
  return (
    <div className="filter-input-container">
        <input 
          type="text" 
          placeholder="search"  
          className="filter-input" 
        />
    </div>
  )
}

export default FilterInput
