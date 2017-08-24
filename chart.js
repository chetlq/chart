
// http://code.google.com/apis/chart/image/
// http://code.google.com/apis/chart/image/docs/chart_params.html

var api = require('./api');

var Chart = function() {};


Chart.prototype.setHostname = function(hostname) {
  return api.setHostname(hostname);
};

Chart.prototype.getUrl = function(secure) {
  return api.createUrl(this, secure);
};

Chart.prototype.getReq = function(secure, callback) {
  return api.getReq(this, secure, callback);
};


module.exports = Chart;
