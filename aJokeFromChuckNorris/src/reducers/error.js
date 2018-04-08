import * as types from "../constants/actionTypes";

const initialState = {
  isError: false,
  message: ""
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case types.FOUND_AN_ERROR:
      console.log(action.payload.from);
      return { isError: true, message: action.payload.error };
    case types.CLEAR_ERROR:
      return initialState;
    default:
      return state;
  }
}
