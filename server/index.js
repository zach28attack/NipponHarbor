const express = require("express");
const app = express();
const fs = require("fs");
const {exec} = require("child_process");

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

app.get("/articles", (req, res) => {
  let headlines = [];
  exec;
  exec(
    "/Library/Frameworks/Python.framework/Versions/3.12/bin/python3 ./scrapers/article_web_scraper.py",
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      fs.readFile("headlines.json", "utf8", (err, data) => {
        if (err) {
          console.error(err);
          res.status(500);
          return;
        }
        headlines = JSON.parse(data);
        res.status(200).json({
          headlines: headlines,
        });
      });
    }
  );
});

app.listen(3000);
