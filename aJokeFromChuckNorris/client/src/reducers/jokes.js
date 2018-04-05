import * as types from "../constants/actionTypes";
import { getAllJokes } from "../api";
const initialState = { jokes: [] };

export default function jokesReducer(state = initialState, action) {
  const { jokes } = state;
  switch (action.type) {
    case types.FETCH_ALL_JOKES_SUCCESSED:
      return {
        ...state,
        jokes: action.payload
      };
    case types.FETCH_JOKE_BY_ID_SUCCESSED:
      return {
        ...state,
        jokes: [...jokes, action.payload].sort((a, b) => a.id < b.id)
      };
    default:
      return state;
  }
}
