const app = require("express")();
const bodyParser = require("body-parser");
const jokesAPI = require("./jokesAPI");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/random/", async (req, res) => {
  try {
    const randomedData = await jokesAPI.getRandomJoke();
    return res.json(randomedData);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(3000, () => {
  console.log("started listening at 3000");
});
