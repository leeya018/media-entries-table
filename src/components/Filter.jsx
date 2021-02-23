import React,{useRef} from "react";


export default function Filter({onChangeFilter}) {
  const inputRef = useRef("")
  function filterSearch(){
    onChangeFilter(inputRef.current.value)
  }
  return (
    <div className="filter">
      <input type="text" className="filter-input" ref={inputRef}  placeholder="Search for..." />
      <button className="filter-btn" onClick={filterSearch}>Go!</button>
    </div>
  );
}
