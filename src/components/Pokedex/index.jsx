import React from 'react'
import pokemon from '../../pokemon.json'
import Pokecard from '..'

const Pokedex = () => {
    return (
      <div>
        <h1>Pokedex</h1>
        <div>
          {
            pokemon.map((pokemon) => (
              <Pokecard key={pokemon.id} pokemon={pokemon} />
            ))
          }
        </div>
      </div>
    )
  }

export default Pokedex

