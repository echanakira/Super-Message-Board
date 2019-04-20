
'use strict';

//will call all respective functions when
window.onload = function () {
  setInterval(DateDisplay,1000);
  showDivs(slideIndex);
  status(true);
  ohButton();
  getOH();
}

//the orginal slideIndex
var slideIndex = 0;

//This is the office hour button, a collapsible week
function ohButton() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = document.getElementById("weekbutton")

      if (content.style.display === "inline-block") {
        content.style.display = "none";
      } else {
        content.style.display = "inline-block";
      }
    });
  }
}

//Status function, changes the appearnce based on the boolean "here" value 
function status(here) {
  if (here == false) {
    outOfOffice(0, 0, 10); // this takes parameters (hours,minutes,seconds)
    document.getElementById("status").style.backgroundColor = "rgb(201, 0, 0)"
  } else {
    inOffice();
    document.getElementById("status").style.backgroundColor = "green"
  }

}

//changes the Status text 
function inOffice() {
  document.getElementById("statusValue").innerHTML = "I am in my office!"
}

//sets up countdown timer
function outOfOffice(hours, mins, secs) {
  var countDownDate = new Date();
  countDownDate.setHours(hours + countDownDate.getHours());
  countDownDate.setMinutes(mins + countDownDate.getMinutes());
  countDownDate.setSeconds(secs + 1 + countDownDate.getSeconds());
  var countDownDateTime = countDownDate.getTime();


  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDateTime - now;


    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("statusValue").innerHTML = + hours + "h "
      + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("statusValue").innerHTML = "Should be here any minute!!";

    }
  }, 1000);


}

//displays current date and time for the top right "IRB 1207" fieldset
function DateDisplay() {
  var today = new Date();

  document.getElementById("time").innerHTML = (today.getMonth() + 1) + "/"
    + today.getDate() + "/"
    + today.getFullYear() + " @ "
    + normalTime1(today.getHours()) + ":"
    + normalTime2(today.getMinutes())

}

function normalTime1(hours) {
  if (hours > 12) {
    return hours - 12;
  } else {
    return hours;
  }
}

function normalTime2(minutes) {
  if (minutes < 10) {
    return "0" + minutes;
  } else {
    return minutes;
  }
}

//sets up professor announcments slides
var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("slideButton");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {

    dots[i].style.background = "#e7e7e7"
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.background = "rgb(201, 0, 0)";
}

function getOH(){
  let officeHours = JSON.parse(localStorage.getItem("availability"));
  console.log(officeHours.Tuesday)
  document.getElementById("mondayValue").innerHTML = noOH(officeHours.Monday);
  document.getElementById("tuesdayValue").innerHTML = noOH(officeHours.Tuesday);
  document.getElementById("wednesdayValue").innerHTML = noOH(officeHours.Wedneday);
  document.getElementById("thursdayValue").innerHTML = noOH(officeHours.Thursday);
  document.getElementById("fridayValue").innerHTML = noOH(officeHours.Friday);
}

function noOH(day){
  if (day.length == 0){
    return "N/A";
  } else {
    return day;
  }
}



