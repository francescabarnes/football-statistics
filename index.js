const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const axios = require("axios");
const cheerio = require("cheerio");
const port = 3000;
dotenv.config();
const URIDB = process.env.URIDB;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("Server started on port 3000");
});

mongoose
  .connect(URIDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Atlas connected!");
  })
  .catch((err) => {
    console.log(err);
  });
