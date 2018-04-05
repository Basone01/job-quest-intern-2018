import { CHANGE_CHARACTER_NAME, RESET_CHARACTER_NAME } from "../constants";
const initialState = {
  firstname: "",
  lastname: ""
};

export default function jokesReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CHARACTER_NAME:
      return payload;
    case RESET_CHARACTER_NAME:
      return {
        firstname: "",
        lastname: ""
      };
    default:
      return state;
  }
}
