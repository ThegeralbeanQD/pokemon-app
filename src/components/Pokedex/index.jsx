import React from 'react'
import pokemon from '../../pokemon.json'
import { Pokecard } from '..'

const Pokedex = () => {
    return (
      <div className='pokedex'>
        <h1>Pokedex</h1>
        <div className='pokecard-holder'>
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

