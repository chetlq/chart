var express    = require('express');        // call express
var app        = express();
var bodyParser = require('body-parser');
const fs = require('fs');
var d3 = require("d3");
const d3node = require('d3-node');
// const output = require('d3node-output')
const markvisBar = require('markvis-bar');
const csvString = fs.readFileSync('./data.csv').toString();
const data = d3.csvParse(csvString);
 data.slice(data.length,1);
console.log(data);

console.log("-------------111------------------");
const gen = n => {
 const data = []

 for (let i = 0; i < n; ++i) {
   if(i%2==0){var znak = 1}else{znak=-1};
   data.push({
     key: i,
     value: znak*Math.max(10, Math.floor(Math.random() * 100))
   })
 }
 data.push({
   key: 11,
   value: -250
 })
 return data
}
 const data1 = []
data.forEach(function(item, i) {
  console.log(item.key+" " + item.value+ ":" + i);
  data1.push({
    key: item.key,
    value: item.value
  })
});
// // console.log(data[data.length]);
// console.log("------------------------");
// console.log(gen(10));
// Create output files
//
var data3 =
[ { "key": 0, "value": 19 },
  { "key": 1, "value": -52 },
  { "key": 2, "value": 26 },
  { "key": 3, "value": -10 },
  { "key": 4, "value": 94 },
  { "key": 5, "value": -21 },
  { "key": 6, "value": 56 },
  { "key": 7, "value": -29 },
  { "key": 8, "value": -490 },
  { "key": 9, "value": -31 } ];
const bar = markvisBar({ data: data3, d3,d3node});
//output('./', bar)
//console.log(bar);

//var html = require('./index')

// var MongoClient = require('mongodb');             // define our app using express
// //var bodyParser = require('body-parser');
// var mongoose   = require('mongoose');
// //var url = "mongodb://localhost:27017/mybase";
// var url = "mongodb://sbertech:Zx350707@ds157112.mlab.com:57112/sendmom";
//
// var jsonParser = bodyParser.json();
//
// mongoose.connect(url); // connect to our database


  //   app.use(bodyParser.json());
  //   //app.use(bodyParser.urlencoded());
  // ///  app.use('/', birds);
  //   //app.use(function(err, req, res, next) {
  //   //  console.error(err.stack);
  //   //  res.status(500).send('Something broke!');
  // //  });
   app.use(errorHandler);
    // app.get('/', function(req, res) {
    //     res.sendFile(__dirname + '/index.html');
    // });

    app.get('/', function(req, res) {
        res.send(bar);
    });

    app.set('port', process.env.PORT || 8001);

    var server = app.listen(app.get('port'), function() {
      console.log('Express server listening on port ' + server.address().port);
    });
    function errorHandler(err, req, res, next) {
   if (res.headersSent) {
    res.send (err);
     return next(err);
   }
   res.status(400);
   res.render('error', { error: err });
 }
