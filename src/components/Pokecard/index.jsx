import React from 'react'

const Pokecard = ({ pokemon }) => {
    return (
      <div className="pokecard">
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img src={pokemon.image} />
        <p> Type: {pokemon.type}</p>
      </div>
    )
  }

export default Pokecard