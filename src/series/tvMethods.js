const mongoose = require("mongoose");
const TvModel = require("./tvModel");

exports.addSeries = async (newSeries) => {
  try {
    let series = new TvModel(newSeries);
    await series.save();
    console.log("Series Created");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

exports.listSeries = async () => {
  try {
    console.log(await TvModel.find({}));
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

exports.updateSeries = async (oldSeries, newSeries) => {
  try {
    await TvModel.updateOne(oldSeries, newSeries);
    console.log("Series Updated");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

exports.deleteSeries = async (series) => {
  try {
    await TvModel.deleteOne(series);
    console.log("Series Deleted");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};
