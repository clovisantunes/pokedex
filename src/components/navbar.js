import { useContext } from "react";
import React from "react";
import FavoriteContext from "../context/FavoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoApi =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img alt="pokeapi_logo" src={logoApi} className="Nabar_image"></img>
      </div>
      <div>{favoritePokemons.length} ❤</div>
    </nav>
  );
};

export default Navbar;
