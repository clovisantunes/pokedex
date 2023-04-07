import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api";
const SearchBar = (props) =>{

  
    const [search, setSearch] = useState('dito')
    const [pokemon , setPokemon] = useState()
    const onChangeHandler = (e) =>{
        setSearch(e.target.value)
    }
   
   
    const onButtonClickHand = () => {
        onSearchHandler(search)
    }

const onSearchHandler = async (pokemon) => {
    const result = await  searchPokemon(pokemon)
    setPokemon(result)
  }

    return(
        <div className="searchbar_container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler}
                 />
                 <div>
                    <button className="search_btn" onClick={onButtonClickHand}>Buscar</button>
                 </div>
                 {pokemon ? (
                    <div>
                        <div>Nome: {pokemon.name}</div>
                        <div>Peso: {pokemon.weight}</div>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        
                    </div>
                 ) : null}
            </div>
            </div>
        
        )
}

export default SearchBar;