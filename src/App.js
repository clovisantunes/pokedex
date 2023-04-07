import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/navbar";
import Pokedex  from './components/pokedex'
import { getPokemon, getPokemonData } from "./api";



function App() {
  
  const [loading, setloading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () =>{
   try {
    setloading(true)
    const data = await getPokemon();
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData (pokemon.url)
    });

    const results = await Promise.all(promises)
    setPokemons(results);
    setloading(false);
   } catch (error) {
    console.log("Error Fetch_pokemon:", error)
   }
  }


  useEffect (() =>{
    console.log("carregou")  
    fetchPokemons();
    }, [])
  
  
  return (
      <div>
      <Navbar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
