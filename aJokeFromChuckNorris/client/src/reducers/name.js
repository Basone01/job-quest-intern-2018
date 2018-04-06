import { CHANGE_CHARACTER_NAME, RESET_CHARACTER_NAME } from "../constants/actionTypes";
const initialState = {
  firstName: "Chuck",
  lastName: "Norris"
};

export default function jokesReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CHARACTER_NAME:
      return (!action.payload)?state:action.payload;
      
    case RESET_CHARACTER_NAME:
      return {
        firstName: "Chuck",
        lastName: "Norris"
      };
    default:
      return state;
  }
}
