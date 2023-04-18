const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./Movie");
const cors = require("cors");
const app = express();
const port = 8888;

const uri = "mongodb+srv://itasuser:itasuser@cluster0.rafwlii.mongodb.net/FinalAssignment?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Failed to connect to MongoDB", err);
});

app.use(cors());
app.use(express.static(__dirname + "/client/build"));

app.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find(
      {},
      { _id: 0, Key: 1, Title: 1, Year: 1 }
    ).sort({ Title: 1 });
    console.log("Fetched movies:", movies);
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.get("/movies/:id", async (req, res) => {
  const movie = await Movie.findOne({ Key: req.params.id });
  res.json(movie);
});

app.get("/actors/:name", async (req, res) => {
  const name = req.params.name;
  const movies = await Movie.find(
    { Actors: { $regex: name, $options: "i" } },
    { _id: 0, Key: 1, Title: 1, Year: 1 }
  ).sort({ Title: 1 });
  res.json(movies);
});

app.get("/years/:year", async (req, res) => {
  const year = req.params.year;
  const movies = await Movie.find(
    { Year: year },
    { _id: 0, Key: 1, Title: 1 }
  ).sort({ Title: 1 });
  res.json(movies);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
