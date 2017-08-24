var https = require('https');

https.get('https://google-chart.herokuapp.com/', function(res) {
  console.log("statusCode: ", res.statusCode); // <======= Here's the status code
  console.log("headers: ", res.headers);

  // res.on('data', function(d) {
  //   process.stdout.write(d);
  // });

}).on('error', function(e) {
  console.error(e);
});
