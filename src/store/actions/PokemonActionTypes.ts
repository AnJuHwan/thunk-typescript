export const POKETMON_SUCCESS = 'POKETMON_SUCCESS';
export const POKETMON_FAIL = 'POKETMON_FAIL';

export interface PokemonType {
  abilities: PokemonAbilities[];
  sprites: PokemonSprites;
}

export interface PokemonAbilities {
  ability: {
    name: string;
    url: string;
    is_hidden: boolean;
    slot: number;
  };
}

export interface PokemonSprites {
  front_default: string;
}

export interface pokemonFailDispatch {
  type: typeof POKETMON_FAIL;
}

export interface pokemonSuccessDispatch {
  type: typeof POKETMON_SUCCESS;
  payload: {
    abilities: PokemonAbilities[];
    sprites: PokemonSprites;
  };
}

export type PokemonDispatchType = pokemonFailDispatch | pokemonSuccessDispatch;
