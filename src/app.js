require("./db/connection");

const mongoose = require("mongoose");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const {
  addMovie,
  list,
  updateMovie,
  deleteMovie,
  filterMovie,
} = require("./film/filmMethods");
const {
  addSeries,
  listSeries,
  updateSeries,
  deleteSeries,
  filterSeries,
} = require("./series/tvMethods");
const argv = yargs(hideBin(process.argv)).argv;

const app = async () => {
  if (argv.addM) {
    await addMovie({
      name: argv.name,
      actor: argv.actor,
      rating: argv.rating,
      year: argv.year,
    });
  } else if (argv.listM) {
    list();
  } else if (argv.updateM) {
    await updateMovie(
      {
        old: argv.name,
      },
      {
        name: argv.name,
        actor: argv.actor,
        rating: argv.rating,
        year: argv.year,
      }
    );
  } else if (argv.deleteM) {
    await deleteMovie({
      name: argv.delete
    });
  } else if (argv.filterM) {
    const find = {
      name: { name: argv.filter },
      actor: { actor: argv.filter },
      year: { year: argv.filter },
      rating: { rating: argv.filter },
    };
    await filterMovie(find[argv.type]);
  } else if (argv.addS) {
    await addSeries({
      name: argv.name,
      actor: argv.actor,
      episodes: argv.episodes,
      rating: argv.rating,
      year: argv.year,
    });
  } else if (argv.listS) {
    listSeries();
  } else if (argv.updateS) {
    await updateSeries(
      {
        old: argv.old,
      },
      {
        name: argv.name,
        actor: argv.actor,
        episodes: argv.episodes,
        rating: argv.rating,
        year: argv.year,
      }
    );
  } else if (argv.deleteS) {
    await deleteSeries({
      name: argv.delete,
    });
  } else if (argv.filterS) {
    const find = {
      name: { name: argv.filter },
      actor: { actor: argv.filter },
      year: { year: argv.filter },
      rating: { rating: argv.filter },
    };
    await filterSeries(find[argv.type]);
  } else {
    console.log("Wrong Command");
  }
};

app();
