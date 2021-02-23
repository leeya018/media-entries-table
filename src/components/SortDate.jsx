import React from "react";

export default function SortDate() {
  let a = new Date()
  return (
    <div className="sort-date">
      <span>sort by creation date</span> <button className="sort-btn">1</button>
    </div>
  );
}
