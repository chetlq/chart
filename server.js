const svg2png = require('svg2png');
const d3 = require('d3-node')().d3;
const d3nBar = require('./chart2.js');
var bodyParser = require('body-parser');
//const d3nBar = require('./example.js');
var express    = require('express');        // call express
var app        = express();
//
var moment = require('moment');
//
// function randomDate(){
//    var startDate = new Date(2000,0,1).getTime();
//    var endDate =  new Date(2018,0,1).getTime();
//    var spaces = (endDate - startDate);
//    var timestamp = Math.round(Math.random() * spaces);
//    timestamp += startDate;
//    return new Date(timestamp);
// }
// function formatDate(date){
//     var month = randomDate().getMonth()+1;
//     var day = randomDate().getDate();
//
//     month = month < 10 ? '0' + month : month;
//     day = day < 10 ? '0' + day : day;
//
//     return String(day+"."+month+"."+date.getFullYear())  ;
// }
//
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// };
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var data = [];
var my_d3bar;

var svgBuffer;
app.post('/rr', function(req, res) {
  data = req.body;
  console.log(data);
  data.sort(function(a,b){
    if (moment(a.date, "DD.MM.YYYY")>moment(b.date, "DD.MM.YYYY")) {return 1}
    else{return -1}
  });
//
//  data.reduce(function(previousValue, currentItem, index) {
//      if (previousValue.date.trim()==currentItem.date) {
//       currentItem.date=previousValue.date+" ";
//     };
//         return currentItem
// });
//  my_d3bar = d3nBar({ data: data });
//
//  svgBuffer = new Buffer(my_d3bar.svgString(), 'utf-8');
res.status(200);
res.send(req.body);
});
// for (var i = 0; i <100; i++) {
//   data.push({ "date": formatDate(randomDate()), "amount": getRandomInt(0, 5000) })
// };


//data[0] = { "date": formatDate(randomDate())+/n+formatDate(randomDate()), "value": -4000 }
// data.sort(function(a,b){
//   if (a.value>b.value) {return 1}
//   else{return -1}
// });
  //console.log(data);




// create output files
app.use(errorHandler);
app.get('/ff', function(req, res) {

  svg2png(svgBuffer)
    .then(buffer => {
      //fs.writeFile(dest+'.png', buffer);
            res.status(200);
      res.setHeader('Content-Type', 'image/png');

          res.send(buffer);
      //console.log();
  })
    .catch(e => console.error('ERR:', e));

});
//
app.set('port', process.env.PORT || 8002);

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
  // output: <svg w
