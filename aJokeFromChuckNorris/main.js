const app = require("express")();
const bodyParser = require("body-parser");
const jokesRoutes = require("./jokeRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/jokes",jokesRoutes);


app.listen(3000, () => {
  console.log("started listening at 3000");
});
