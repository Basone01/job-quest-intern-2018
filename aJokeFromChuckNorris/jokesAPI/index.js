const axios = require("axios");
const prefix = "http://api.icndb.com/jokes/";

const getFromAPI = async url => {
  try {
    const response = await axios.get(prefix + url);
    return response.data.value;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

const getAllJokes = () =>{
  return getFromAPI();
}

const getRandomJoke = () => {
  return getFromAPI("random");
};

const getJokebyId = async id => {
  return getFromAPI(id);
};

module.exports = {
  getAllJokes,
  getJokebyId,
  getRandomJoke
};
