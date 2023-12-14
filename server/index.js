const express = require("express");
const app = express();
const {getArticles} = require("./controller/articles");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //TODO: update once client is deployed
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
  console.log("GET recieved");
});
app.post("/", (req, res) => {
  console.log("POST recieved");
});
app.delete("/", (req, res) => {
  console.log("DELETE recieved");
});
app.put("/", (req, res) => {
  console.log("PUT recieved");
});
app.patch("/", (req, res) => {
  console.log("PATCH recieved");
});

// retrieve headlines from nhk
app.get("/articles", getArticles);

app.listen(3000);
