import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api";


const SearchBar = (props) => {
  const [search, setSearch] = useState("dito");
    const {onSearch} = props
  const onChangeHandler = (e) => {
    setSearch(e.target.value) 
    if(e.target.value.length === 0) {
        onSearch(undefined)
    }
  };

  const onButtonClickHand = () => {
    onSearch(search)
  };

  return (
    <div className="searchbar_container">
      <div className="searchbar">
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
        <div>
          <button className="search_btn" onClick={onButtonClickHand}>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
