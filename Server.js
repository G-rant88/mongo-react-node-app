var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var fs = require('fs');
var path = require("path");
var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var db = require("./models");

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("build"));

mongoose.Promise = Promise;

if (process.env.MONGODB_URI){

mongoose.connect(process.env.MONGODB_URI);

} else{

mongoose.connect("mongodb://localhost/reactdb", {

});

}

app.post("/save", function(req, res) {

  console.log(req.body);

      db.Article
      .create({

      title: req.body.info.title,
      year: req.body.info.year,
      rated: req.body.info.rated,
      plot: req.body.info.plot,
      genre: req.body.info.genre,
      actors: req.body.info.actors,
      poster: req.body.info.poster,
      rating: req.body.info.rating,
      director: req.body.info.director,
      awards: req.body.info.awards

      }).then(function(result){

        console.log("article created");

          db.Article
    .find({})
    .then(function(dbArticle) {
      
      console.log(dbArticle);
      console.log("got all articles");

      res.json({dbArticle});
    })
       })

    });

app.get("/articles", function(req, res) {

db.Article
    .find({})
    .then(function(dbArticle) {
      
      console.log(dbArticle);
      console.log("got all articles");

      res.json({dbArticle});
    })
});

app.get("/", function(req, res){

  res.render("index.html");
})

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
