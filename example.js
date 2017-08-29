
const D3Node = require('d3-node');

function bar(){
  const d3n = new D3Node({});
const d3 = d3n.d3;
//     const width = _width - _margin.left - _margin.right;
//     const height = _height - _margin.top - _margin.bottom;
//
//
// var num = 25;
// var count = data.length;
////////////////////////STACK///////////////////////////////////////
var data = [
  {month: "Q1-2016", apples: 3840, bananas: 1920, cherries: -1960, dates: -400},
  {month: "Q2-2016", apples: 1600, bananas: 1440, cherries: -960, dates: -400},
  {month: "Q3-2016", apples:  640, bananas:  960, cherries: -640, dates: -600},
  {month: "Q4-2016", apples:  320, bananas:  480, cherries: -640, dates: -400}
];

var series = d3.stack()
    .keys(["apples", "bananas", "cherries", "dates"])
    .offset(d3.stackOffsetDiverging)
    (data);

 //var svg= d3.select("svg"),
    var margin = {top: 20, right: 30, bottom: 30, left: 60},
    width = 900,
    height = 600;

    var svg = d3n.createSVG(width, height)
       .append('g')
       .attr('transform', `translate(${margin.left}, ${margin.top})`).attr("fill", "pink");

var x = d3.scaleBand()
    .domain(data.map(function(d) { return d.month; }))
    .rangeRound([margin.left, width - margin.right])
    .padding(0.1);

var y = d3.scaleLinear()
    .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
    .rangeRound([height - margin.bottom, margin.top]);

var z = d3.scaleOrdinal(d3.schemeCategory10);

svg.append("g")
  .selectAll("g")
  .data(series)
  .enter().append("g")
    .attr("fill", function(d) { return z(d.key); })
  .selectAll("rect")
  .data(function(d) { return d; })
  .enter().append("rect")
    .attr("width", x.bandwidth)
    .attr("x", function(d) { return x(d.data.month); })
    .attr("y", function(d) { return y(d[1]); })
    .attr("height", function(d) { return y(d[0]) - y(d[1]); })
//
svg.append("g")
    .attr("transform", "translate(0," + y(0) + ")")
    .call(d3.axisBottom(x));

svg.append("g")
    .attr("transform", "translate(" + margin.left + ",0)")
    .call(d3.axisLeft(y));

function stackMin(serie) {
  return d3.min(serie, function(d) { return d[0]; });
}

function stackMax(serie) {
  return d3.max(serie, function(d) { return d[1]; });
}

return d3n;
}

module.exports = bar;
//
//
//
//
// var data = [
//   {month: new Date(2015, 0, 1), apples: 3840, bananas: 1920, cherries: 960, dates: 400},
//   {month: new Date(2015, 1, 1), apples: 1600, bananas: 1440, cherries: 960, dates: 400},
//   {month: new Date(2015, 2, 1), apples:  640, bananas:  960, cherries: 640, dates: 400},
//   {month: new Date(2015, 3, 1), apples:  320, bananas:  480, cherries: 640, dates: 400}
// ];
//
// var stack = _d3.stack()
//     .keys(["apples", "bananas", "cherries", "dates"])
//     .order(_d3.stackOrderNone)
//     .offset(_d3.stackOffsetNone);
//   var series = stack(data);
//   console.log(series);
//
//
//   var keys = ["apples","bananas","cherries","dates"]
//
//
//  x.domain(data.map(function(d) { return d.month; }));
//  y.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
//  z.domain(keys);
//
//  g.append("g")
//    .selectAll("g")
//    .data(d3.stack().keys(keys)(data))
//    .enter().append("g")
//      .attr("fill", function(d) { return z(d.key); })
//    .selectAll("rect")
//    .data(function(d) { return d; })
//    .enter().append("rect")
//      .attr("x", function(d) { return x(d.data.State); })
//      .attr("y", function(d) { return y(d[1]); })
//      .attr("height", function(d) { return y(d[0]) - y(d[1]); })
//      .attr("width", x.bandwidth());
//
//  g.append("g")
//      .attr("class", "axis")
//      .attr("transform", "translate(0," + height + ")")
//      .call(d3.axisBottom(x));
//
//  g.append("g")
//      .attr("class", "axis")
//      .call(d3.axisLeft(y).ticks(null, "s"))
//    .append("text")
//      .attr("x", 2)
//      .attr("y", y(y.ticks().pop()) + 0.5)
//      .attr("dy", "0.32em")
//      .attr("fill", "#000")
//      .attr("font-weight", "bold")
//      .attr("text-anchor", "start")
//      .text("Population");
//////////////////////END STACK/////////////////////////////////////////






 //  const g = d3n.createSVG(_width, _height)
 //    .append('g')
 //    .attr('transform', `translate(${_margin.left}, ${_margin.top})`).attr("fill", "pink");
 //
 //    var x = _d3.scaleBand().range([0, width]).padding(0.05);
 //    //var x2 = _d3.scaleBand().range([0, width]).padding(0.05);
 //
 //    var y = _d3.scaleLinear().range([height, 0]); //.domain(_d3.extent(data, function(d) { return d.value; })).range([height, 0]);
 //
 //    x.domain(data.map(function(d) {  return d.key; }));
 //
 //    y.domain(_d3.extent(data, function(d) {
 //      if (d.value>0)
 //        return d.value;
 //    })).nice();
 //
 //    var z = _d3.scaleOrdinal()
 //        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
 //
 //  g.selectAll('.bar').
 // data(data).
 // enter().
 // append('rect')
 // .attr("fill",  function(d) {
 //   //console.log(Math.round((d.value /(_d3.min(data, (d) => d.value)))*255));
 //
 // if (d.value>0){
 //   var k = _d3.max(data, (d) => d.value);
 //   //console.log(k);
 //   return "rgb("+0+", "+(255-Math.round((d.value/k)*127))+", "+Math.round((d.value/k)*255)+")"
 //  }
 // })
 // //.attr("class", function(d) { return "bar bar--" + (d.value < 0 ? "negative" : "positive"); })
 // .attr('x', function(d) {
 //      return x(d.key);
 //    }).
 //    attr('width', x.bandwidth()).
 //    attr('y', function(d) {
 //      if (d.value > 0) {
 //        return y(d.value);
 //      } else {
 //        return y(0);
 //        //console.log(y(0));
 //      }
 //    })
 //    .attr('height', function(d) {
 //
 //      return Math.abs(y(d.value) - y(0));
 //    });
 //
 //
 //
 //
 //  g.selectAll("body")
 //  .attr("style","background-color: black");
 //
 //
 //        return d3n;
