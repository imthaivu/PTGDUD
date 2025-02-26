import React from "react";

function NoResults() {
  return (
    <div className="no-results">
      <h2>Sorry, no results were found for "cakescascsa"</h2>
      <img src="no-results.png" alt="No results" />
      <p>We have all your Independence Day sweets covered.</p>
      <div className="buttons">
        <button>Sweet Cake</button>
        <button>Black Cake</button>
        <button>Pozole Verde</button>
        <button>Healthy Food</button>
      </div>
    </div>
  );
}

export default NoResults;
