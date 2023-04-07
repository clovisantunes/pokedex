import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/navbar";
import Pokedex  from './components/pokedex'


function App() {
  return (
      <div>
      <Navbar />
      <SearchBar />
      <Pokedex />
    </div>
  );
}

export default App;
