const express = require('express');
//const bodyParser = require('body-parser')
//const path = require('path');
const app = express();

app.get('/api/customers', (req, res) => {
  // res.send('pling')
  const costumers = [
    //GraphQL ?
    {id: 1, firstName: 'St-st-stol', lastName: 'Veig'},
    {id: 2, firstName: 'Hehehe', lastName: 'dda'},
    {id: 3, firstName: 'Ama', lastName: 'Lamalie'},
    {id: 4, firstName: 'World browser', lastName: 'Find your dream destination'}
  ];
  res.json(costumers)
});

const port = 5000;

app.listen(port, () => console.log(`HURRAY! Server started on port ${port}`))
