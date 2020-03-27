var date = $("#currentDay");
var momentDay = moment().format("MMM Do YY"); 
var currenttime =  moment().format("h"); 

date.text(momentDay)
console.log(currenttime)