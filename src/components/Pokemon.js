import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  const onHeartClick = () => {
    console.log("Favoritar");
  };
  const heart = "❤";

  console.log("pokemon", pokemon);
  return (
    <div className="pokemon_card">
      <div className="Pokemon_image_container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon_image"
        />
      </div>
      <div className="card_body">
        <div className="card_top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card_bottom"></div>
        <div className="pokemon_tpe">
          {pokemon.types.map((type, index) => {
            return (
              <div key={index} className="pokemon_type_text">
                {type.type.name}
              </div>
            );
          })}
        </div>
        <button className="pokemon_heart_button" onClick={onHeartClick}>
          {heart}
        </button>
      </div>
    </div>
  );
};

export default Pokemon;
