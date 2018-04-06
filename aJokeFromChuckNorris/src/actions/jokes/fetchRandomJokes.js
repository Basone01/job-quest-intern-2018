import * as types from "../../constants/actionTypes";
import { getRandomJokes, getJokebyId } from "../../api";
import { foundAnError } from "../error";

const fetchRandomJokesRequest = () => ({
  type: types.FETCH_RANDOM_JOKES_REQUESTED
});
const fetchRandomJokesSuccess = jokes => {
  console.log("fetchRandomJokesSuccess");
  return {
    type: types.FETCH_RANDOM_JOKES_SUCCESSED,
    payload: jokes
  };
};

export const fetchRandomJokes = options => async dispatch => {
  console.log("fetchingRandomJokes");
  console.log(options);

  const action = fetchRandomJokesRequest();
  dispatch(action);
  try {
    const RandomedJokes = await getRandomJokes(options);
    return dispatch(fetchRandomJokesSuccess(RandomedJokes));
  } catch (error) {
    return dispatch(foundAnError(action.type, error.message));
  }
};
