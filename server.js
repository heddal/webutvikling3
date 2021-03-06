const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute =
  'mongodb://it2810-10.idi.ntnu.no:27017/admin';
  //'mongodb://hedda:webdev2019@it2810-10.idi.ntnu.no:27017/project3';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// made for logging and bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

{/*// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}*/}


// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});


// this is our get method to get data by id for destination page
router.get('/getDataFrom/:id', (req, res, next) => {
  var destinatoinID = req.params.id;
  Data.findById(destinatoinID, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});


//get the three most popular destinations to show at the main page
router.get('/threeMostPopular', (req, res) => {
  Data.find().sort({popularity: -1}).limit(3).exec(function(err, data){
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  })
})

router.get('/search/:word', (req, res, next) => {
  const word = req.params.word.toLowerCase()
  Data.find({$or: [{'name': word}, {'country': word}, {'continent': word}]}, function (err, data){
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  })})

  router.get('/search/:continent/:word', (req, res) => {
    const continent = req.params.continent.toLowerCase()
    const word = req.params.word.toLowerCase()
    Data.find({ $and: [ {$or: [{'name': word}, {'country': word}]}, {'continent': continent} ]} , function (err, data){
      if (err) return res.json({ success: false, error: err })
      return res.json({ success: true, data: data });
  })})

//get the three most popular destinations to show at the main page
router.get('/wordcloudPopularity', (req, res) => {
  Data.find().select('name popularity -_id').exec(function(err, data){
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  })
})

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
