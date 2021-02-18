import React from "react";
import "../index.css"

export default function Filter() {
  return (
    <div className="filter">
      <input type="text" className="filter-input" placeholder="Search for..." />
      <button className="filter-btn">Go!</button>
    </div>
  );
}
