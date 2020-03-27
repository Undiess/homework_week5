var date = $("#currentDay");
var momentDay = moment().format("MMM Do YYYY"); 
var currentHour =  moment().format("HH"); 

date.text(momentDay)

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
 $(".btn").on("click",function(){
    var text = this.parentNode.childNodes[3].value
    var timeslot = this.parentNode.childNodes[1].innerHTML
    localStorage.setItem(timeslot, text)
    console.log(timeslot)
 })

 var stored = localStorage.getItem("9am");

 for (i=9; i<12 ;i++){
    var stored = localStorage.getItem(i+"am");
    $("#"+i).placeholder = stored
}
for (i=1; i<12 ;i++){
    var stored = localStorage.getItem(i+"pm");
    console.log(stored);
}
