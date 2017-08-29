
var express    = require('express');        // call express
var app        = express();
const axios = require('axios');
var qs = require('qs');
const querystring = require('querystring');
var arr = [ { date: '28.08.2017', amount: 8105 },
  { date: '26.08.2017', amount: 173008 },
  { date: '28.08.2017 ', amount: -48990274 },
  { date: '26.08.2017 ', amount: -8773 } ];

//console.log(JSON.stringify(arr));
axios.post('http://localhost:8002/zz',arr)  .then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
  })
.catch(res=>console.log(res.response.status));
// create output files

//

  // output: <svg w
