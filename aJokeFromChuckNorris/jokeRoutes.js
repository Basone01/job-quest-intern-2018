const router = require("express").Router();
const jokesAPI = require("./jokesAPI");

router.get("/", async (req, res) => {
   
    try {
      const randomedData = await jokesAPI.getAllJokes();
      return res.json(randomedData);
    } catch (error) {
      res.status(500).json(error);
    }
  });

router.get("/random", async (req, res) => {
   
    try {
      const randomedData = await jokesAPI.getRandomJoke();
      return res.json(randomedData);
    } catch (error) {
      res.status(500).json(error);
    }
  });

router.get("/:id", async (req, res) => {
   
    try {
      const randomedData = await jokesAPI.getJokebyId(req.params.id);
      return res.json(randomedData);
    } catch (error) {
      res.status(500).json(error);
    }
  });
module.exports = router;
