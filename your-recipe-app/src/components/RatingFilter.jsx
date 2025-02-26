import React from "react";

function RatingFilter() {
  return (
    <div className="rating-filter">
      <h3>Rating</h3>
      {[5, 4, 3, 2, 1].map((stars) => (
        <div key={stars} className="rating-row">
          <input type="checkbox" />
          {"⭐".repeat(stars)}
        </div>
      ))}
    </div>
  );
}

export default RatingFilter;
