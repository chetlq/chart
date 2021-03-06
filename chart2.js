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
  style: _style = 'body { background-color: white}',
  width: _width = 1024,
  height: _height = 600,
  margin: _margin =
  (function(){
   var arrZnak = ((new D3Node()).d3).extent(data, (d) => d.amount);
   var num = 25;
   var count = data.length;
   var top;
   var  bottom;
   var left = 80;
   if (count<num){
      top = 30;
      bottom = 30;
   }else{
      top = 10;
      bottom = 10;
   }
   switch (getZnak(arrZnak)) {
     case 0:

       return { top: top, right: 10, bottom: bottom, left: left }
       break;
    case -1:
      return { top:70, right: 10, bottom: bottom, left: left }
      break;
    case 1:
      return { top: top, right: 10, bottom: 70, left: left }
      break;

     default:

   }
  })(),
  barColor: _barColor = 'black',
  barHoverColor: _barHoverColor = 'brown',
} = {}) {
  const _svgStyles = `
    .bar { fill: ${_barColor}; }
    .bar:hover { fill: ${_barHoverColor}; }
    .bar--positive { fill: darkorange ;}
    .bar--negative {  fill: steelblue ;}
  `;


  const d3n = new D3Node({
    selector: _selector,
    svgStyles: _svgStyles + _style,
    container: _container
  });
  const _d3 = d3n.d3;

    const width = _width - _margin.left - _margin.right;
    const height = _height - _margin.top - _margin.bottom;
var arrZnak = _d3.extent(data, (d) => d.amount);

var num = 25;
var count = data.length;

function count(element, index, array) {
  return element.length;
}



  const g = d3n.createSVG(_width, _height)
    .append('g')
    .attr('transform', `translate(${_margin.left}, ${_margin.top})`).attr("fill", "pink");

    var x = _d3.scaleBand().range([0, width]).padding(0.05);
    var x2 = _d3.scaleBand().range([0, width]).padding(0.05);



    var y = _d3.scaleLinear().range([height, 0]); //.domain(_d3.extent(data, function(d) { return d.amount; })).range([height, 0]);
    var yAxis = _d3.axisLeft()
      .scale(y);

    //.orient("left");
  var arr_x1 = data.map(function(d) {
    if(d.amount>0) return d.date;

  });
  var arr_x2 = data.map(function(d) {
    if(d.amount<0) return d.date;

  });




    x.domain(data.map(function(d) {

      return d.date;

    }));
    x2.domain(data.map(function(d) {
   return d.date
    }));


console.log("Znak: "+getZnak(arrZnak));
switch (getZnak(arrZnak)) {
  case -1:
    y.domain([_d3.min(data, (d) => d.amount),0]);
    break;
  case 0:
  y.domain(_d3.extent(data, function(d) {
      return d.amount;
  })).nice();
    break;
  case 1:
    y.domain([0, _d3.max(data, (d) => d.amount)]);
    break;
}


  g.selectAll('.bar').
 data(data).
 enter().
 append('rect')
 .attr("fill",  function(d) {
   //console.log(Math.round((d.amount /(_d3.min(data, (d) => d.amount)))*255));
   if (d.amount<0){
   var k = _d3.min(data, (d) => d.amount);
   console.log(255-Math.round((d.amount /k )*127));
   return "rgb("+(255-Math.round((d.amount /k )*30))+", "+(255-Math.round((d.amount /k )*255))+", " + 0 + ")"
 }
 if (d.amount>0){
   var k = _d3.max(data, (d) => d.amount);
   //console.log(k);
   return "rgb("+0+", "+(255-Math.round((d.amount/k)*127))+", "+Math.round((d.amount/k)*255)+")"
  }
 })
 //.attr("class", function(d) { return "bar bar--" + (d.amount < 0 ? "negative" : "positive"); })
 .attr('x', function(d) {
      return x(d.date);
    }).attr('width', x.bandwidth()).attr('y', function(d) {
      if (d.amount > 0) {
        return y(d.amount);
      } else {
        return y(0);
        //console.log(y(0));
      }
    })
    .attr('height', function(d) {
      //console.log(y(d.amount)+" : "+  y(0));
      //console.log("ssssss : "+ Math.abs(y(d.amount) - y(0)));
      return Math.abs(y(d.amount) - y(0));
    });



//
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

  .attr("dy","1.2em")
  .attr("transform", "rotate(-90)");



g.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + y(0)+ ")")
  .call(_d3.axisBottom(x).tickValues(arr_x1))
  .selectAll("text")
  .style("text-anchor", "end")
  .attr("dx", (function(){

    switch (getZnak(arrZnak)) {
      case 1:
        return "-.8em"//"-.5em"
        break;
      case 0:
      return "-.8em"
        break;
    }
  })())
  .attr("dy", (function(){
    switch (getZnak(arrZnak)) {
      case 1:
        return "-.55em"//".3em"
        break;
      case 0:
      return "-.55em"
        break;
    }
  })())

  // .attr("dx", "-.8em")
  // .attr("dy", "-.55em")
  .attr("transform","rotate(-90)");

  g.append("g")
    .attr("class", "y axis")
    .call(yAxis);

var myright = 6;
if (count>70) myright = 4;
g.selectAll("text.bar")
  .data(data)
  .enter().append("text")
  .attr("fill", "black")
  .attr("style",  function(d) {
    if (count> 70) {return   "font-size: 11"}})
    //else {return   "font-size: 11"}
  .attr("text-anchor", function(d) {
    if(count<num){return "middle";}
    else{
    if (d.amount > 0) {
      var por = (d.amount + "").length;
      if (((-y(d.amount) + y(0)) / por) < 10) {
        return "start";
      } else {
        return "end";
      }
    }
    if (d.amount < 0) {
      var por = (d.amount + "").length - 1;
      if (((y(d.amount) - y(0)) / por) < 10) {
        return "end"
      } else {
        return "start"
      }
    }
}



  })
  .attr("x", function(d) {
    if(count<num){return x(d.date) + x.bandwidth()/2;}
    else{
    if (d.amount > 0) {
      return x(d.date) + x.bandwidth() / 2 + myright;
    }
    if (d.amount < 0) {
      return x(d.date) + x.bandwidth() / 2 + myright;
    }
  }

  })
  .attr("y", function(d) {
    if(count<num){
      if (d.amount>0){return y(d.amount) - 5;} else { return y(d.amount) +15; }
    }
    else{
    if (d.amount > 0) {
      var por = (d.amount + "").length;
      if (((-y(d.amount) + y(0)) / por) < 10) {
        return y(0);
      } else {
        return y(d.amount);
      }
    }
    if (d.amount < 0) {
      var por = (d.amount + "").length - 1;
      if (((y(d.amount) - y(0)) / por) < 10) {
        return y(0) + 2;
      } else {
        return y(d.amount);
      }
    }
}

  })
  .attr("transform", function(d) {
    if (count<num){}
    else{
    if (d.amount > 0) {
      var por = (d.amount + "").length;
      //console.log((y(d.amount)-y(0))/por);

      if (((-y(d.amount) + y(0)) / por) < 10) {
        return "rotate(-90," + (x(d.date) + x.bandwidth() / 2 + myright) + "," + y(0) + ")";
      } else {
        return "rotate(-90," + (x(d.date) + x.bandwidth() / 2 + myright) + "," + y(d.amount) + ")";
      }
    }


    if (d.amount < 0) {
      var por = (d.amount + "").length - 1;
      if (((y(d.amount) - y(0)) / por) < 10) {
        return "rotate(-90," + (x(d.date) + x.bandwidth() / 2 + myright) + "," + (y(0) + 2) + ")";
      } else {
        return "rotate(-90," + (x(d.date) + x.bandwidth() / 2 + myright) + "," + (y(d.amount)) + ")";
      }
    }

  }

  })

  .text(function(d) {

    return d.amount;

  });



        return d3n;
        }

        module.exports = bar;
