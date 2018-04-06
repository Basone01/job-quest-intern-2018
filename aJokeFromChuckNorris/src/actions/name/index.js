import { CHANGE_CHARACTER_NAME } from "../../constants/actionTypes";

const changeUsername = username => ({
  type: CHANGE_CHARACTER_NAME,
  payload: username
});

export const submitUsername = username => dispatch => {
  dispatch(changeUsername(username));
};
