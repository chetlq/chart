const D3Node = require('d3-node');
function getZnak(arr){
  if (arr[0]<0&&arr[1]<0) return -1;
  if((arr[0]*arr[1])<=0) return 0;
  if(arr[0]>0&&arr[1]>0) return 1;
};
function bar({
  data,
  selector: _selector = '#chart',
  container: _container = `
    <div id="container">
      <h2>Bar Chart</h2>
      <div id="chart"></div>
    </div>
  `,
  style: _style = '',
  width: _width = 960,
  height: _height = 500,
  margin: _margin =
(function(){
 var arrZnak = ((new D3Node()).d3).extent(data, (d) => d.value);
 switch (getZnak(arrZnak)) {
   case 0:
     return { top: 30, right: 20, bottom: 30, left: 50 }
     break;
  case -1:
    return { top: 65, right: 20, bottom: 20, left: 50 }
    break;
  case 1:
    return { top: 20, right: 20, bottom: 65, left: 50 }
    break;

   default:

 }
})(),
  //{ top: 20, right: 20, bottom: 20, left: 50 },
  //margin: _margin = { top: 50, right: 20, bottom: 50, left: 50 },
  barColor: _barColor = 'black',
  barHoverColor: _barHoverColor = 'brown',
} = {}) {
  const _svgStyles = `
    .bar { fill: ${_barColor}; }
    .bar:hover { fill: ${_barHoverColor}; }
    .bar--positive { fill: darkorange ;}
    .bar--negative {  fill: steelblue ;}
  `;
// const d3n2 = ;
//const _d32 = (new D3Node()).d3;

  const d3n = new D3Node({
    selector: _selector,
    svgStyles: _svgStyles + _style,
    container: _container
  });
  const _d3 = d3n.d3;

  //  const d3 = d3n.d3;

    const width = _width - _margin.left - _margin.right;
    const height = _height - _margin.top - _margin.bottom;
var arrZnak = _d3.extent(data, (d) => d.value);

function count(element, index, array) {
  return element.length;
}

var nest = _d3.nest().key(function (d) {
  if (d.value<0) { return ((-d.value)+"").trim();}
  else {return (d.value+"").trim();}

}).entries(data);

function printArray(nest) {

nest.forEach(function (e) {

            console.log(e.key.length+" : "+e.key);

});
}


  const g = d3n.createSVG(_width, _height)
    .append('g')
    .attr('transform', `translate(${_margin.left}, ${_margin.top})`);

  var x = _d3.scaleBand().range([0, width]).padding(0.05);
  var x2 = _d3.scaleBand().range([0, width]).padding(0.05);
  var x3 = _d3.scaleBand().range([0, width]).padding(0.05);


  var y = _d3.scaleLinear().range([height, 0]); //.domain(_d3.extent(data, function(d) { return d.value; })).range([height, 0]);
  var yAxis = _d3.axisLeft()
    .scale(y);

  //.orient("left");
var arr_x1 = data.map(function(d) {
  if(d.value>0) return d.key;

});
var arr_x2 = data.map(function(d) {
  if(d.value<0) return d.key;

});

var arr_x3 = data.map(function(d) {
  if(d.value>0) return d.value;

});
x3.domain(data.map(function(d) {

  return d.value;

}));


  x.domain(data.map(function(d) {

    return d.key;

  }));
  x2.domain(data.map(function(d) {
 return d.key
  }));


console.log("Znak: "+getZnak(arrZnak));
switch (getZnak(arrZnak)) {
  case -1:
    y.domain([_d3.min(data, (d) => d.value),0]);
    break;
  case 0:
  y.domain(_d3.extent(data, function(d) {
      return d.value;
  })).nice();
    break;
  case 1:
    y.domain([0, _d3.max(data, (d) => d.value)]);
    break;
}
//if(getZnak())
//y.domain([d3.min(data, (d) => d.value),0]);
  // y.domain(_d3.extent(data, function(d) {
  //     return d.value;
  // })).nice();


  g.selectAll('.bar').
 data(data).
 enter().
 append('rect')
 .attr("fill",  function(d) {
   //console.log(Math.round((d.value /(_d3.min(data, (d) => d.value)))*255));
   var k = _d3.min(data, (d) => d.value);
   console.log(k);
   return "rgb(0, "+Math.round(255-((d.value /k )*255))+", " + Math.round(355-((d.value /k )*255)) + ")"
 })
 //.attr("class", function(d) { return "bar bar--" + (d.value < 0 ? "negative" : "positive"); })
 .attr('x', function(d) {
      return x(d.key);
    }).attr('width', x.bandwidth()).attr('y', function(d) {
      if (d.value > 0) {
        return y(d.value);
      } else {
        return y(0);
        //console.log(y(0));
      }
    })
    .attr('height', function(d) {
      console.log(y(d.value)+" : "+  y(0));
      console.log("ssssss : "+ Math.abs(y(d.value) - y(0)));
      return Math.abs(y(d.value) - y(0));
    });



    g.append("g")

      .attr("class", "x axis")
      .attr("transform", "translate(0," + y(0)+ ")")
      .call(_d3.axisTop(x3).tickValues(arr_x3).tickSize(0))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", (function(){
                printArray(nest);
        switch (getZnak(arrZnak)) {
          case 1:
            return "0em"
            break;
          case 0:
var k = data.map(function(d) {

  return d.value;

});
console.log(" "+k);




          return "3em"
            break;
        }
      })())
      .attr("dy", (function(){
        switch (getZnak(arrZnak)) {
          case 1:
            return "0em"
            break;
          case 0:
          return "1.5em"
            break;
        }
      })())

      // .attr("dx", "-.8em")
      // .attr("dy", "-.55em")
      .attr("transform",(function(){
        switch (getZnak(arrZnak)) {
          case -1:
            return "rotate(-90)"
            break;
          case 0:
          return "rotate(-90)"
            break;
          case 1:
            return "rotate(-45)"
            break;
        }
      })());



  g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + y(0)+ ")")
    .call(_d3.axisTop(x2).tickValues(arr_x2))
    .selectAll("text")
    .style("text-anchor", "end")
    // .attr("dx", "-0.8em")
    // .attr("dy", "1.1em")
    // .attr("transform", "rotate(90)");
    .attr("dx", (function(){
      switch (getZnak(arrZnak)) {
        case -1:
          return "6.3em"//"5.8em"
          break;
        case 0:
        return "6.3em"
          break;
      }
    })())


    //"5.8em")
    // .attr("dy",(function(){
    //   switch (getZnak(arrZnak)) {
    //     case -1:
    //       return "1.2em"//".2em"
    //       break;
    //     case 0:
    //     return "2.2em"
    //       break;
    //   }
    // })())
    .attr("dy","1.2em")
    .attr("transform", (function(){
      switch (getZnak(arrZnak)) {
        case -1:
          return "rotate(-90)"
          break;
        case 0:
        return "rotate(-90)"
          break;
        case 1:
          return "rotate(-45)"
          break;
      }
    })());



  g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + y(0)+ ")")
    .call(_d3.axisBottom(x).tickValues(arr_x1))
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", (function(){

      switch (getZnak(arrZnak)) {
        case 1:
          return "-.5em"
          break;
        case 0:
        return "-.8em"
          break;
      }
    })())
    .attr("dy", (function(){
      switch (getZnak(arrZnak)) {
        case 1:
          return ".3em"
          break;
        case 0:
        return "-.55em"
          break;
      }
    })())

    // .attr("dx", "-.8em")
    // .attr("dy", "-.55em")
    .attr("transform",(function(){
      switch (getZnak(arrZnak)) {
        case -1:
          return "rotate(-90)"
          break;
        case 0:
        return "rotate(-90)"
          break;
        case 1:
          return "rotate(-45)"
          break;
      }
    })());

  g.append("g")
    .attr("class", "y axis")
    .call(yAxis);





    g.selectAll("text.bar")
        .data(data)
      .enter().append("text")
      // .attr("fill",  function(d) {
      //   //console.log(Math.round((d.value /(_d3.min(data, (d) => d.value)))*255));
      //   var k = _d3.min(data, (d) => d.value);
      //   console.log(k);
      //
      //   return "rgb(" + Math.round(255-((d.value /k )*255)) + ", "+Math.round(((d.value /k )*155))+", 0)"
      // })
        .attr("text-anchor", "middle")
      //
      //   //.attr("transform","rotate(-5)")
        .attr("x", function(d) { return x(d.key) + x.bandwidth()/2; })
        .attr("y", function(d) {
          if (d.value>0){return y(d.value) - 5;} else { return y(d.value) +15; }

        })
        .attr("y", function(d) {return y(d.value)  })
        //.attr("transform","rotate(-2)")
        .text(function(d) { return d.value; });

        return d3n;
        }

        module.exports = bar;
