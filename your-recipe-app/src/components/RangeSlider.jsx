import React from "react";

function RangeSlider() {
  return (
    <div className="range-slider">
      <h3>Time</h3>
      <input type="range" min="0" max="120" />
    </div>
  );
}

export default RangeSlider;
