import {
  POKETMON_SUCCESS,
  PokemonType,
  POKETMON_FAIL,
  PokemonDispatchType,
} from './../actions/PokemonActionTypes';
interface InitialState {
  success: boolean;
  pokemon?: PokemonType;
}

const initialState: InitialState = {
  success: false,
};

const PokemonReducer = (state = initialState, action: PokemonDispatchType): InitialState => {
  switch (action.type) {
    case POKETMON_SUCCESS:
      const { abilities, sprites } = action.payload;
      return {
        ...state,
        success: true,
        pokemon: {
          abilities,
          sprites,
        },
      };
    case POKETMON_FAIL:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export default PokemonReducer;
