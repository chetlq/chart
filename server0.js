
var express    = require('express');        // call express
var app        = express();
const axios = require('axios');
var qs = require('qs');
const querystring = require('querystring');
var arr = [
      { date: '28.08.2017', amount: 8105 },
      { date: '26.08.2017', amount: 173008 },
      { date: '28.08.2017 ', amount: -48990274 },
      { date: '26.08.2017 ', amount: -8773 } ];

    //console.log(JSON.stringify(arr));
    axios.post('https://google-chart.herokuapp.com/rr',arr).then(function(res) {
      console.log("statusCode: ", res.status); // <======= Here's the status code
      console.log(res.data);
      //console.log("headers: ", res.headers);
    // console.log(response.headers);
    // console.log(response.config);
  })
.catch(res=>console.log(res.response.status));
// create output files

//

  // output: <svg w
