const mongoose = require("mongoose");
const FilmModel = require("./filmModel");

exports.addMovie = async (newFilm) => {
  try {
    let movie = new FilmModel(newFilm);
    await movie.save();
    console.log("Movie Created");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

exports.list = async () => {
  try {
    console.log(await FilmModel.find({}));
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

exports.updateMovie = async (oldFilm, newFilm) => {
  try {
    await FilmModel.updateOne(oldFilm, newFilm);
    console.log("Movie Updated");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

exports.deleteMovie = async (newFilm) => {
  try {
    await FilmModel.deleteOne(newFilm);
    console.log("Movie Deleted");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

exports.filterMovie = async (item) => {
  try {
    console.log(await FilmModel.findOne({ item }).exec());
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};
