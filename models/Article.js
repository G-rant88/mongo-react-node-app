var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    unique: true

  },
  // `link` is required and of type String
    year: {
    type: String
  },

    rated: {
    type: String
  },

    genre: {
    type: String
  },

    plot: {
    type: String
  },

    actors: {
    type: String
  },

   poster: {
    type: String
  },

    rating: {
    type: String
  },

  director: {
    type: String
  },

  awards: {
    type: String
  },

  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});


var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
