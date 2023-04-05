import "./App.css";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/navbar";
import { searchPokemon } from "./api";
function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <div>
      </div>
    </div>
  );
}

export default App;
