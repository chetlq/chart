var http = require('http');
var https = require('https');
var hostname = 'localhost:8001';

module.exports = {
  'setHostname': function(newHostname){
    hostname = newHostname;
  },
  'createUrl': function(secure) {
    return ((secure) ? 'https://' : 'http://') + hostname + '/';
  },
  'getReq': function(secure, callback) {
    var options = {
      'hostname': hostname,
      'path': '/',
      'method': 'GET'
    };
    var type = secure ? https : http;
    var req = type.request(options, callback);

    return req;
  }
};
