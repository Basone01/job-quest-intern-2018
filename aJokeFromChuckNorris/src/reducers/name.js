import {
  CHANGE_CHARACTER_NAME,
  RESET_CHARACTER_NAME
} from "../constants/actionTypes";
const initialState = {
  firstName: "Chuck",
  lastName: "Norris"
};

export default function nameReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CHARACTER_NAME:
      if (!action.payload) return state;
      else {
        let { firstName, lastName } = action.payload;
        if (firstName === "" && lastName === "") {
          firstName = "Chuck";
          lastName = "Norris";
        }

        return { firstName, lastName };
      }

    case RESET_CHARACTER_NAME:
      return {
        firstName: "Chuck",
        lastName: "Norris"
      };
    default:
      return state;
  }
}
