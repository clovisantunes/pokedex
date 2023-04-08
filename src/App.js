import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/navbar";
import Pokedex from "./components/pokedex";
import { getPokemon, getPokemonData, searchPokemon } from "./api";
import { FavoriteProvider } from "./context/FavoritesContext";

const favoritesKey = "f";
function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setloading] = useState(false);
  const [NotFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites , setFavorites] = useState([]);

 const itensPerPage = 30; 
  const fetchPokemons = async () => {
    try {
      setloading(true);
      const data = await getPokemon(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setloading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("Error Fetch_pokemon:", error);
    }
  };

  const loadFavoritePokemons = () => {
   const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
   setFavorites(pokemons)
  }
  useEffect(() => {
    loadFavoritePokemons();
  }, [page]);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    }else{
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  }
const onSearchHandler = async (pokemon) => {
  if (!pokemon){
    return fetchPokemons();
  }
  setloading(true)
  setNotFound(false)
  const result = await searchPokemon (pokemon)
  if(!result){
    setloading(false)
    setNotFound(true)

  }
  else{
    setPokemons([result])
    setPage(0)
    setTotalPages(1)
  }
  setloading(false)
}
  return (
    <FavoriteProvider
    value={{
      favoritePokemons: favorites,
      updateFavoritePokemons: updateFavoritePokemons,
    }}
    >
    <div>
      <Navbar />
      <SearchBar onSearch={onSearchHandler}/>
      {NotFound ? (
        <div className="not_found_text"> Pokemon não encontrado</div>
      ) :
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />}
    </div>
    </FavoriteProvider>
  );
}

export default App;
