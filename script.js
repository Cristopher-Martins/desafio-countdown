//  
var countdownDate = new Date("Sep 8, 2022 08:00:00").getTime();

var x = setInterval(() => {;
var userDate = new Date().getTime();

var difference = countdownDate - userDate

var days = Math.floor(difference  / (1000 * 60 * 60 * 24));
var hours = Math.floor((difference  % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((difference  % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((difference  % (1000 * 60)) / 1000);

document.getElementById("day").innerHTML = days;
document.getElementById("hour").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if (difference <= 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = 00;
    document.getElementById("hour").innerHTML = 00;
    document.getElementById("minutes").innerHTML = 00;
    document.getElementById("seconds").innerHTML = 00;
  }
},1000)