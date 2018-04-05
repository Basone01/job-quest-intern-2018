const app = require("express")();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("started listening at 3000");
});
