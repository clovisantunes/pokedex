import React from "react";
import { useState } from "react";

const SearchBar = () =>{
    const [search, setSearch] = useState('dito')
    const onChangeHandler = (e) =>{
        setSearch(e.target.value)
    }


    const onButtonClickHand = () => {
        console.log("pokemon", search)
    }
    return(
        <div className="searchbar_container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler}
                 />
                 <div>
                    <button className="search_btn" onClick={onButtonClickHand}>
                        Buscar
                    </button>
                 </div>
            </div>
        </div>
        )
}

export default SearchBar;