function randomDate(){
   var startDate = new Date(2000,0,1).getTime();
   var endDate =  new Date(2018,0,1).getTime();
   var spaces = (endDate - startDate);
   var timestamp = Math.round(Math.random() * spaces);
   timestamp += startDate;
   return new Date(timestamp);
}
function formatDate(date){
    var month = randomDate().getMonth();
    var day = randomDate().getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return String(day+"."+month+"."+date.getFullYear())  ;
}
console.log( randomDate() );
console.log( randomDate() );
console.log( randomDate() );
console.log( randomDate() );
//UPDATE: added with date format
console.log( formatDate(randomDate()) );

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


console.log(getRandomInt(-10, 10));
console.log(getRandomInt(-10, 10));
console.log(getRandomInt(-10, 10));
console.log(getRandomInt(-10, 10));
console.log(getRandomInt(-10, 10));
