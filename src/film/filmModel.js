const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  actor: {
    type: String,
    default: "actor unknown",
  },
  rating: {
    type: Number,
    default: "N/A",
  },
  Year: {
    type: String,
    default: "actor unknown",
  },
});

const FilmModel = mongoose.model("Movies", filmSchema);

module.exports = FilmModel;
