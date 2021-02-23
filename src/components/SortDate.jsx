import React from "react";
import keydownIcon from "../images/keydown.png";
import keyupIcon from "../images/keyup.png";

export default function SortDate({ OnChangeOrderByDate, orderByDate }) {
  function getImageStyle() {
    return {
      backgroundImage: `url(${orderByDate ?  keyupIcon:keydownIcon})`,
      width: "2em",
      height: "2em",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    };
  }
  return (
    <div className="sort-date">
      <span className="sort-span">sort by creation date</span>
      <button
        className="sort-btn"
        style={getImageStyle()}
        onClick={() => OnChangeOrderByDate(!orderByDate)}
      ></button>
    </div>
  );
}
<span class="material-icons">keyboard_arrow_down</span>;
