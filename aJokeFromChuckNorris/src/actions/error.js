import { FOUND_AN_ERROR , CLEAR_ERROR } from "../constants/actionTypes";

export const foundAnError = (from, error) => ({
  type: FOUND_AN_ERROR,
  payload: { from, error }
});

export const clearError = () => ({
  type: CLEAR_ERROR
});