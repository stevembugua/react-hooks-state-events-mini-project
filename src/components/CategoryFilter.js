import React, { useState } from "react";

function CategoryFilter({ categories, handleFilterList }) {
  const [active, setActive] = useState(false);

  function handleClick(e, category) {
    setActive(e.target.id);
    handleFilterList(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index) => {
        return (
          <button
            id={category}
            className={`${active === category ? "selected" : ""}`}
            key={index}
            onClick={(e) => handleClick(e, category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;