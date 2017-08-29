const svg2png = require('svg2png');
const d3 = require('d3-node')().d3;
//const d3nBar = require('./chart2.js');

const d3nBar = require('./example.js');
var bodyParser = require('body-parser');
var express    = require('express');        // call express
var app        = express();

// create output files
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res) {
  var arr = req.body;
  console.log(arr);
  console.log(arr[0].date);
  //console.log(JSON.stringify(req.body, null, 2));
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
app.use(errorHandler);
app.get('/', function(req, res) {
console.log(req.body);
      //fs.writeFile(dest+'.png', buffer);
            res.status(200);
      //res.setHeader('Content-Type', 'image/png');

          res.send("ok");
          //console.log("ok");


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
  // output: <svg w
