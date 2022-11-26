import React from "react";

function CategoryFilter( {categories, selectedCategory, onCategoryChange } ) {
 
function handleFilter(event) {
  onCategoryChange(event)
}



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((categoryObj) => {
        return <button 
          onClick={handleFilter} 
          className= {selectedCategory === categoryObj ? "selected" : ""}
          value={categoryObj} 
          key={categoryObj} 
          >{categoryObj}</button>
      })}

      
    </div>
  );
}

export default CategoryFilter;
