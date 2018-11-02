import React, {useState, Suspense} from 'react';
import fetchPokemon from '../queries/fetchPokemon';
import {createCache, createResource} from 'react-cache';

const cache = createCache();

// createResource accepts a function that returns a promise.
const myPokemon = createResource(fetchPokemon);

const Pokedex = () => {
  const [pokemonName, setPokemonName] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    setPokemonName(e.target.elements.pokemonName.value);
  }
  // going to find the nearest react suspense ancestor - i.e. it's parent. The suspense component will then decide what to render.
  const pokemon = myPokemon.read(cache, pokemonName);
  return (
    <>
      <div className="pokedex">
        <div className="sensor">
          <button></button>
        </div>
        <div className="camera-display">
          <img src={pokemon && pokemon.image} />
        </div>
        <div className="divider" />
        <div className="stats-display">
          <h2>{pokemon && pokemon.name}</h2>
          <h3>Moves</h3>
          <ul>
            {pokemon &&
            pokemon.attacks.special.map((attack) => (
              <li>{attack.name}</li>
            ))
            }
          </ul>
          <h3>Evolutions</h3>
          <ul>
            {pokemon &&
            pokemon.evolutions &&
            pokemon.evolutions.map((evolved) => (
              <li>{evolved.name}</li>
            ))
            }
          </ul>
        </div>
        <div className="botom-actions">
          <div className="actions">
            <button className="a" />
          </div>
          <div className="cross">
            <button className="cross-button up" />
            <button className="cross-button right" />
            <button className="cross-button down" />
            <button className="cross-button left" />
            <div className="cross-button center" />
          </div>
        </div>
        <div className="input-pad">
          <form onSubmit={handleSubmit}>
            <input
              name="pokemonName"
              placeholder="Search the original Pokemon"
            />
          </form>
        </div>
        <div className="bottom-modes">
          <button className="level-button" />
          <button className="level-button" />
          <button className="level-button" />
          <button className="level-button" />

          <button className="pokedex-mode black-button">Pokedex</button>
          <button className="game-mode black-button">Game</button>
        </div>
      </div>
    </>
  )
};


export default Pokedex;
