import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function FilterBar() {
  return (
    <div className="filter-bar">
      <h3>Filter</h3>
      <FontAwesomeIcon icon={faBars} />
      <div className="checkbox-group">
        {["Pan-fried", "Stir-fried", "Grilled", "Roasted", "Sauteed", "Baked", "Steamed", "Stewed"].map((type) => (
          <label key={type}>
            <input type="checkbox" /> {type}
          </label>
        ))}
      </div>
      <h3>Time</h3>
      <input type="range" className="range-slider" />
      <h3>Rating</h3>
      <div className="rating">
        <input type="checkbox" />
        <span>⭐⭐⭐⭐⭐</span>
      </div>
      <button className="apply-btn">Apply</button>
    </div>
  );
}

export default FilterBar;
