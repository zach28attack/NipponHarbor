const fs = require("fs");
const {exec} = require("child_process");

exports.getArticles = async (req, res) => {
  let articles = [];
  // TODO: move script execution out of controller and into a scheduler
  //
  // exec("/Library/Frameworks/Python.framework/Versions/3.12/bin/python3 ./scrapers/article_web_scraper.py", (err) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  fs.readFile("articles.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500);
      return;
    }
    articles = JSON.parse(data);
    res.status(200).json({
      articles: articles,
    });
  });
  // });
};
