import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/navbar";
import { searchPokemon } from "./api";


function App() {
  return (
      <div>
      <Navbar />
      <SearchBar />
      <div className="App">

      </div>
    </div>
  );
}

export default App;
