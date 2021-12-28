import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { RootReducerType } from './Store';
import { fetchPokemonData } from './store/actions/PokemonActions';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const pokemonReducer = useSelector((state: RootReducerType) => state.PokemonReducer);
  const dispatch = useDispatch();

  const pokemonNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };
  const pokemonSearch = () => {
    dispatch(fetchPokemonData(pokemonName));
  };
  return (
    <div className='App'>
      <input type='text' onChange={pokemonNameHandler} />
      <button onClick={pokemonSearch}>포켓몬 찾기</button>

      {pokemonReducer.success && (
        <div>
          <p>포켓몬 이름:{pokemonName}</p>
          <p>포켓몬 스킬 이름</p>
          {pokemonReducer.pokemon?.abilities.map((abilitie, index) => {
            return (
              <div>
                <p>
                  {index + 1}: {abilitie.ability.name}
                </p>
              </div>
            );
          })}
          <img src={pokemonReducer.pokemon?.sprites.front_default} alt='포켓몬 이미지' />
        </div>
      )}
    </div>
  );
}

export default App;
