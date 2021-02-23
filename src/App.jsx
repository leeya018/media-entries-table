import { useState } from "react";
import Filter from "./components/Filter";
import Login from "./components/Login";
import MyEntries from "./components/MyEntries";
import SortDate from "./components/SortDate";
import Table from "./components/Table";



function App() {


  return (
    <div className="app">
      <MyEntries />
      {/* <Login /> */}
    </div>
  );
}

export default App;
