import * as types from "../constants/actionTypes";
import { getAllJokes } from "../api";
const initialState = [];

export default function jokesReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_JOKES_SUCCESSED:
      return action.payload;
    case types.FETCH_JOKE_BY_ID_SUCCESSED:
      return [...state, action.payload].sort((a, b) => a.id < b.id);
    default:
      return state;
  }
}
