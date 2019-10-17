const express = require('express');
const app = express();

// customers is just example code. Can be deleted...
app.get('/api/customers', (req, res) => {
  const costumers = [
    {id: 1, firstName: 'St-st-stol', lastName: 'Veig'},
    {id: 2, firstName: 'Hehehe', lastName: 'dda'},
    {id: 3, firstName: 'Ama', lastName: 'Lamalie'},
    {id: 4, firstName: 'World browser', lastName: 'Find your dream destination'}
  ];
  res.json(costumers);
});

let places = require("./data/places");
app.get('/places', (req, res) => {
  // eksempel på steder
  res.json(places);
})


let players = require("./dummyDatabase");
app.get("/dummydata", async (req, res) => {
  try {
    res.status(200).json({
      data: players
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = app