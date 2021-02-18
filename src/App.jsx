import Filter from "./components/Filter";
import SortDate from "./components/SortDate";
import Table from "./components/Table";
import "./index.css"

function App() {
  return (
    <div className="app">
      <Filter />
      <SortDate />
      <Table />
    </div>
  );
}

export default App;
