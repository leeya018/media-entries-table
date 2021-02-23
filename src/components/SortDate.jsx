import React from "react";

export default function SortDate({ OnChangeOrderByDate, orderByDate }) {
  return (
    <div className="sort-date">
      <span>sort by creation date</span>
      <button
        className="sort-btn"
        onClick={() => OnChangeOrderByDate(!orderByDate)}
      ></button>
    </div>
  );
}
