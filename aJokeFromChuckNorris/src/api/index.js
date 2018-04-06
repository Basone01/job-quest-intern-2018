import axios from "axios";
import { JOKE_API_END_POINT } from "../constants/api";

export const getFromAPI = async (url, options) => {
  let query = "";

  if (options) {
    query = `?firstName=${options.firstName}&lastName=${options.lastName}`;
  }

  try {
    const response = await axios.get(JOKE_API_END_POINT + url + query);
    const data = response.data;
    if (data.type === "success") return data.value;
    else throw new Error(data.value);
  } catch (error) {
    throw error;
  }
};

export const getAllJokes = options => {
  return getFromAPI("", options);
};

export const getRandomJokes = options => {
  return getFromAPI("random", options);
};

export const getJokebyId = async (id, options) => {
  return getFromAPI(id, options);
};
