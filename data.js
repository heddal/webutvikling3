
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
// vi må endre dette til hva vi skal ha i våre objekter
const DataSchema = new Schema(
  {
    id: Number,
    name: String,
    description: String,
    continent: String,
    country: String,
    source: String,
    img: String,
    popularity: Number
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema, 'test');
