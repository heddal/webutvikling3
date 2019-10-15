const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('pong')
});
const port = 5000;
app.listen(port);
