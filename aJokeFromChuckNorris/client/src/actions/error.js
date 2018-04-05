import { FOUND_AN_ERROR } from "../constants/actionTypes";

export const foundAnError = (from, error) => ({
  type: FOUND_AN_ERROR,
  payload: { from, error }
});
