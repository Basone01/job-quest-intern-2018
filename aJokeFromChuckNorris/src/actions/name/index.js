import { CHANGE_CHARACTER_NAME } from "../../constants/actionTypes";

export const submitUsername = username  => ({
  type: CHANGE_CHARACTER_NAME,
  payload: username
})
