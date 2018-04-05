import axios from "axios";
import { JOKE_API_END_POINT } from "../constants/api";

export const getFromAPI = async url => {
  try {
    const response = await axios.get(JOKE_API_END_POINT + url);
    const data = response.data;
    if (data.type === "success") return data.value;
    else throw new Error(data.value)
  } catch (error) {
    console.log(error);
    throw error
  }
};

export const getAllJokes = () => {
  return getFromAPI();
};

export const getRandomJoke = () => {
  return getFromAPI("random");
};

export const getJokebyId = async id => {
  return getFromAPI(id);
};
