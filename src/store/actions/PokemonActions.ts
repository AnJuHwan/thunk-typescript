import axios from 'axios';
import { Dispatch } from 'redux';
import { PokemonDispatchType, POKETMON_SUCCESS, POKETMON_FAIL } from './PokemonActionTypes';

export const fetchPokemonData =
  (pokemonName: string) => async (dispatch: Dispatch<PokemonDispatchType>) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = response.data;
      dispatch({
        type: POKETMON_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: POKETMON_FAIL,
      });
    }
  };

// export const fetchPokemonData = (pokemon:string) => {
//   return (dispatch:Dispatch) => {
//     ...로직
//   }
// }
