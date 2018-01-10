var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var fs = require('fs');
var path = require("path");
var PORT = process.env.PORT || 3001;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var db = require("./models");

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("client/build"));

mongoose.Promise = Promise;

if (process.env.MONGODB_URI){

mongoose.connect(process.env.MONGODB_URI);

} else{

mongoose.connect("mongodb://localhost/reactdb", {

});

}

server = app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

var socket = require('socket.io');
 io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id, "SOCKET CONNECTED!!");

     socket.on('SEND_MESSAGE', function(data){

        io.emit('RECEIVE_MESSAGE', data);

      });

        socket.on('DEL_SEND', function(data){
        io.emit('DEL_MESSAGE', data);

      });

        socket.on('ADD_REV', function(data){

          io.emit('REV_MESSAGE', data);

        });

          socket.on('DEL_REV', function(data){

          io.emit('REV_DEL', data);
    });

});


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
    .populate("note")
    .then(function(dbArticle) {
      
      console.log(dbArticle);
      console.log("got all articles");

      res.json({dbArticle});
    })
});

app.post('/note/:id', function(req, res){

console.log(req.body);

  db.Note
    .create({

      body: req.body.notey.note

      })
     .then(function(dbNote) {
      // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true }).populate("note")
    })
    .then(function(dbArticle) {
        console.log(dbArticle);
        console.log("got articles");
        // console.log(dbNote);
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

app.post("/delnote/:id", function(req, res) {

  console.log(req.params.id)

      db.Note
      .remove({

      _id: req.params.id

      }).then(function(result){

 res.end();


       }).catch(function(err) {
      // If an error occurred, send it to the client
      
      res.json(err);

    });

    });


app.post("/delete", function(req, res) {

  console.log(req.body.info.title);

      db.Article
      .remove({

      title: req.body.info.title

      }).then(function(result){

 res.end();


       }).catch(function(err) {
      // If an error occurred, send it to the client
      
      res.json(err);

    });

    });

app.get("/", function(req, res){

  res.render("index.html");
})


