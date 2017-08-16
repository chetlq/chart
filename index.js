/**
 * @fileOverview A example performed how to use markvis-bar
 * @name index.js<markvis-bar/example>
 * @author GeekPlux
 * @license MIT
 */
 var d3 = require("d3");
 //var timeformat = require("d3-time-format");
const d3node = require('d3-node');
const output = require('d3node-output')
const markvisBar = require('markvis-bar');

// var margin = {top: 20, right: 20, bottom: 70, left: 40},
//     width = 600 - margin.left - margin.right,
//     height = 300 - margin.top - margin.bottom;
//
// // Parse the date / time
// var formatTime = d3.timeFormat("%B %d, %Y");
// formatTime(new Date);
//
// var x = d3.scaleOrdinal()
// .range([0, width], .05);
//
// //rangeRoundBands([0, width], .05);
//
// var y = d3.scaleLinear().range([height, 0]);
//
// var xAxis =
// // d3
// //     .scale(x)
// //     .orient("bottom")
// //     .tickFormat(d3.time.format("%Y-%m"));
//
// // var yAxis = d3.svg.axis()
// //     .scale(y)
// //     .orient("left")
// //     .ticks(10);
//
// var svg = d3.select("body").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");
//
// d3.csv("bar-data.csv", function(error, data) {
//
//     data.forEach(function(d) {
//         d.date = parseDate(d.date);
//         d.value = +d.value;
//     });
//
//   x.domain(data.map(function(d) { return d.date; }));
//   y.domain([0, d3.max(data, function(d) { return d.value; })]);
//
//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis)
//     .selectAll("text")
//       .style("text-anchor", "end")
//       .attr("dx", "-.8em")
//       .attr("dy", "-.55em")
//       .attr("transform", "rotate(-90)" );
//
//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//     .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 6)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Value ($)");
//
//   svg.selectAll("bar")
//       .data(data)
//     .enter().append("rect")
//       .style("fill", "steelblue")
//       .attr("x", function(d) { return x(d.date); })
//       .attr("width", x.rangeBand())
//       .attr("y", function(d) { return y(d.value); })
//       .attr("height", function(d) { return height - y(d.value); });
//       });

/**
 * Generate random data to a array
 * @param {number} n array length
 */
const gen = n => {
  const data = [];


  for (let i = 0; i < n; ++i) {
      if (i%2 == 0){var znak = 1} else {var znak = -1};


    data.push({
      key: i+"q",
      value: Math.max(10, Math.floor(Math.random() * 10000))*znak
    })
  }
console.log(data);
  return data
}
var m = markvisBar({ data: gen(20), d3node, export: true })
console.log(m);
// Create output files
//
//const bar = markvisBar({ data: gen(1), d3,d3node});
//output('./', markvisBar({ data: gen(20), d3node, export: true }))
// console.log(bar);
