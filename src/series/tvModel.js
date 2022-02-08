const mongoose = require("mongoose");

const tvSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  actor: {
    type: String,
    default: "actor unknown",
  },
  episodes: {
    type: String,
    default: "Unknown",
  },
  rating: {
    type: String,
    default: "N/A",
  },
  year: {
    type: String,
    default: "N/A",
  },
});

const TvModel = mongoose.model("TV Shows", tvSchema);

module.exports = TvModel;
