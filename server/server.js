const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const apiRequests = require('./ApiRequests');

const https = require('https');

const port = 3000;

const app = express();

var url = "mongodb://jmavandi:whatever12@ds135441.mlab.com:35441/cconversions";


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '.././')));
// app.get('/', (req,res) => {
//   res.sendFile(path.resolve(__dirname + '/../index.html'));
// })

let db;
//connect to mongo Database

MongoClient.connect(url, function(err, database) {
  if (err) throw err;
  db = database.db('cconversions')
});

//create collection of requests

app.post('/getRate', apiRequests.makeRequest, (req, res) => {
  // console.log('req.body' + req.body)
  db.collection('conversions').insertOne(res.locals, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    // db.collection('conversions').find().toArray(function(err, results) {
      // console.log(result)
      // send HTML file populated with quotes here
    })
    // db.end();
}); 

app.get('/getAllRates', (req,res) => {
  
  db.collection('conversions').find().toArray(function(err, results) {
    // console.log(results);
    res.status(200).json(results);
});
})


function convertCurrency(amount, fromCurrency, toCurrency, callback) {
    
    let query = fromCurrency + '_' + toCurrency;
    let apiUrl = `http://free.currencyconverterapi.com/api/v5/convert?q=${query}&compact=y`;
}   

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));