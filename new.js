const svg2png = require('svg2png');
const d3 = require('d3-node')().d3;
//const d3nBar = require('d3node-barchart');
const d3nBar = require('./index_from_d3node.js');

var express    = require('express');        // call express
var app        = express();

var moment = require('moment');


var data =
[
  { "key": "25.10.2017", "value": -94 },
  { "key": "25.10.2017", "value": -19 },
  { "key": "25.10.2017", "value": -26 },
  { "key": "26.3.2017", "value": -21 },
  { "key": "15.10.2017", "value": -21 },
  { "key": "2.10.2017", "value": -56 },
  { "key": "25.10.2018", "value": -29 },
  { "key": "25.11.2018", "value": -291 },
  { "key": "25.12.2018", "value": -29 },
  { "key": "25.10.2019", "value": -200 },
  { "key": "2.10.2013", "value": -101 },
  { "key": "25.10.2013", "value": 31 },
  { "key": "25.10.2017", "value": 94 },
  { "key": "25.10.2017", "value": 19 },
  { "key": "25.10.2017", "value": 26 },
  { "key": "26.3.2017", "value": 21 },
  { "key": "15.10.2017", "value": 21 },
  { "key": "2.10.2017", "value": 56 },
  { "key": "25.10.2018", "value": 29 },
  { "key": "25.11.2018", "value": 291 },
  { "key": "25.12.2018", "value": 29 },
  { "key": "25.10.2019", "value": 200 },
  { "key": "2.10.2013", "value": 101 },
  { "key": "25.10.2013", "value": 31 }
 ];

  data.sort(function(a,b){
    if (moment(a.key, "DD.MM.YYYY")>moment(b.key, "DD.MM.YYYY")) {return 1}
    else{return -1}
  });
 data.reduce(function(previousValue, currentItem, index) {
     if (previousValue.key.trim()==currentItem.key) {
      currentItem.key=previousValue.key+" ";
    };
        return currentItem
});
data.sort(function(a,b){
  if (a.value>b.value) {return 1}
  else{return -1}
});
  console.log(data);

var my_d3bar = d3nBar({ data: data });

var svgBuffer = new Buffer(my_d3bar.svgString(), 'utf-8');


// create output files
app.use(errorHandler);
app.get('/', function(req, res) {

  svg2png(svgBuffer)
    .then(buffer => {
      //fs.writeFile(dest+'.png', buffer);
      res.setHeader('Content-Type', 'image/png');
          res.send(buffer);
      //console.log();
  })
    .catch(e => console.error('ERR:', e));

});
//
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
  // output: <svg width=10 height=20 xmlns="http://www.w3.org/2000/svg"><g></g></svg>
