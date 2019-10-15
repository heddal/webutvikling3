const express = require('express');
const app = express();

app.get('/api/customers', (req, res) => {
  // Dette er eksempelkode
  const costumers = [
    {id: 1, firstName: 'St-st-stol', lastName: 'Veig'},
    {id: 2, firstName: 'Hehehe', lastName: 'dda'},
    {id: 3, firstName: 'Ama', lastName: 'Lamalie'},
    {id: 4, firstName: 'World browser', lastName: 'Find your dream destination'}
  ];
  res.json(costumers);
});

app.get('/places', (req, res) => {
  // eksempel på steder
  const places = [
    {id: 1,
      name: 'Paris',
      continent: 'Europe',
      temprature: [-5, 30],
      mood: ['shopping', 'love'], //+ keywords?
      popularity: 0 // antall besøk her ? ev local storage?
    }, {id: 2,
      name: 'Bali',
      continent: 'Asia',
      temperature: [10, 40],
      mood: ['adventure', 'chill', 'beach'],
      popularity: 0
    }
  ]
  res.json(places);
})

const port = 5000;

app.listen(port, () => console.log(`HURRAY! Server started on port ${port}`))
