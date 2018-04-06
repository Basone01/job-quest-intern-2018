import * as types from "../../constants/actionTypes";
import { getAllJokes, getJokebyId } from "../../api";
import { foundAnError } from "../error";
const fetchAllJokesRequest = () => ({ type: types.FETCH_ALL_JOKES_REQUESTED });
const fetchAllJokesSuccess = jokes => {
  console.log("fetchAllJokesSuccess");
  return {
    type: types.FETCH_ALL_JOKES_SUCCESSED,
    payload: jokes
  };
};


export const fetchAllJokes = (options) => async dispatch => {
  console.log("fetchingAllJokes");
  console.log(options);
  
  const action = fetchAllJokesRequest();
  dispatch(action);
  try {
    const AllJokes = await getAllJokes(options);
    return dispatch(fetchAllJokesSuccess(AllJokes));
  } catch (error) {
    return dispatch(foundAnError(action.type, error.message));
  }
};