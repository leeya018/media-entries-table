import { useState } from "react";
import Filter from "./components/Filter";
import Login from "./components/Login";
import SortDate from "./components/SortDate";
import Table from "./components/Table";


const listItems = [
  {
    thumbnail: "jkl",
    name: "321",
    entryId: "jk43l",
    duration: "55",
    actions: "66",
  },
  {
    thumbnail: "asd",
    name: "321",
    entryId: "jk43l",
    duration: "55",
    actions: "66",
  },
];
function App() {
  const [list, setList] = useState(listItems);
  let [filter,setFilter] = useState("")

  return (
    <div className="app">
      {/* <Filter onChangeFilter={setFilter}/>
      <SortDate />
      <Table list={list} filter={filter}/> */}
      <Login />
    </div>
  );
}

export default App;
