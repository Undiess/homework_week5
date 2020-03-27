var date = $("#currentDay");
var momentDay = moment().format("MMM Do YYYY"); 
var currentHour =  moment().format("HH"); 
currentHour = 12

date.text(momentDay)
console.log(currentHour)

//change colour if the hour is passed 
setInterval(function(){
for(var i=9;i<17;i++){
    var calenderhour = $("#"+i);
    if(currentHour>i){
        calenderhour.css("background-color","yellow")
    }
   if(currentHour==i){
    calenderhour.css("background-color","green")
   }
}
},1000);

//update events 
 $(".event-col").on("click",function(){
    $(this).text("hi")


 })