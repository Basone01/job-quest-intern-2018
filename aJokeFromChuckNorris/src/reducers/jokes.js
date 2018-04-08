import * as types from "../constants/actionTypes";
const initialState = { jokes: [] };

export default function jokesReducer(state = initialState, action) {
  const { jokes } = state;
  switch (action.type) {
    case types.FETCH_ALL_JOKES_REQUESTED:
      return {
        ...state,
        jokes: []
      };
    case types.FETCH_ALL_JOKES_SUCCESSED:
      return {
        ...state,
        jokes: action.payload
      };
    case types.FETCH_JOKE_BY_ID_SUCCESSED:
      return {
        ...state,
        jokes: [
          action.payload,
          ...jokes.filter(joke => joke.id !== action.payload.id)
        ]
      };
    case types.FETCH_RANDOM_JOKES_SUCCESSED:
      return {
        ...state,
        jokes: [
          action.payload,
          ...jokes.filter(joke => joke.id !== action.payload.id)
        ]
      };
    default:
      return state;
  }
}
