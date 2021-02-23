import React from "react";

export default function Filter({onChangeFilter}) {
  return (
    <div className="filter">
      <input type="text" className="filter-input" onChange={(e)=>onChangeFilter(e.target.value)} placeholder="Search for..." />
      <button className="filter-btn">Go!</button>
    </div>
  );
}
