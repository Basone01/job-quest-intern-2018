import * as types from "../../constants/actionTypes";
import { getJokebyId } from "../../api";
import { foundAnError, clearError } from "../error";

const fetchJokeByIdRequest = id => ({
  type: types.FETCH_JOKE_BY_ID_REQUESTED
});
const fetchJokeByIdSuccess = joke => {
  console.log("fetchJokeByIdSuccess");
  return {
    type: types.FETCH_JOKE_BY_ID_SUCCESSED,
    payload: joke
  };
};

export const fetchJokeById = id => async (dispatch, getState) => {
  console.log(`fetching a Joke id:${id}`);
  const options = getState().name;
  dispatch(clearError());
  const action = fetchJokeByIdRequest(id);
  dispatch(action);
  try {
    const joke = await getJokebyId(id, options);
    return dispatch(fetchJokeByIdSuccess(joke));
  } catch (error) {
    return dispatch(foundAnError(action.type, error.message));
  }
};
