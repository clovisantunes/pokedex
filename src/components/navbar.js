import React from "react";

const Navbar = () => {
    const logoApi="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return(
  <nav>
    <div>
        <img
        alt="pokeapi_logo"src={logoApi}className="Nabar_image">   
        </img>
    </div>
  </nav>
)};

export default Navbar;
