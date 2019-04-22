
'use strict';

//will call all respective functions when
window.onload = function () {
  setInterval(DateDisplay,1000);
  showDivs(slideIndex);
  status();
  ohButton();
  getOH();
  setupNav();
  getAnnouncements1();
  getAnnouncements2();
  getAnnouncements3();
  setupThemeProfessor();
  setupProfessorName();

}

function setupOffice(){
  let name = document.querySelector('#name');
  name.innerHTML = `${JSON.parse(localStorage.getItem('professorName'))}'s
  Office`;
}

//the orginal slideIndex
var slideIndex = 0;
function enabledQ(){
  return localStorage.getItem("queueStatus")==="Enabled";
}
//This is the office hour button, a collapsible week
function ohButton() {

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        getOH();
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
function status() {
  let here = JSON.parse(localStorage.getItem('officeStatus'))
  
  if (here.status == "false") {
    outOfOffice(parseInt(here.hours), parseInt(here.minutes), 0); // this takes parameters (hours,minutes,seconds)
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
  document.getElementById("todayOfficeHourButton").innerHTML = queueDay();
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

function setupNav(){
  let office1 = document.querySelector('#nav-office-number1');
  let office2 = document.querySelector('#nav-office-number2');

  office1.innerHTML =  JSON.parse(localStorage.getItem('officeNumber'));
  office2.innerHTML =  JSON.parse(localStorage.getItem('officeNumber'));
  
}


//get the announcments
function getAnnouncements1(){
  let officeHours = JSON.parse(localStorage.getItem("announcements"));
  console.log(officeHours[0].photo)
  document.getElementById("img1").src =  officeHours[0].photo;

}
function getAnnouncements2(){
  let officeHours = JSON.parse(localStorage.getItem("announcements"));
  document.getElementById("img2").src = officeHours[1].photo
}
function getAnnouncements3(){
  let officeHours = JSON.parse(localStorage.getItem("announcements"));
  document.getElementById("img3").src = officeHours[2].photo

}
function getAnnouncements2(){
  let officeHours = JSON.parse(localStorage.getItem("announcements"));
  document.getElementById("img2").src = officeHours[1].photo
}
function getAnnouncements3(){
  let officeHours = JSON.parse(localStorage.getItem("announcements"));
  document.getElementById("img3").src = officeHours[2].photo
}

//Queue display details
function peopleWaiting(){
  //retrieving the Queue in local storage
  let total = JSON.parse(localStorage.getItem("currentQueue"))
  if(total.length == 1){
    document.getElementById("peopleRemaining").innerHTML = "There is <u><strong>" + total.length + "</strong></u> person left in the queue"
  } else {
    document.getElementById("peopleRemaining").innerHTML = "There are <u><strong>" + total.length + "</strong></u> people left in the queue"
  }
  //displays "Next Up"
  document.getElementById("current").innerHTML = "#" + total[0].posistion;
}

peopleWaiting()

function queueDay(){
  let officeHours = JSON.parse(localStorage.getItem("availability"));
  var d = new Date();
  var n = d.getDay()
  if (n == 0){
    return "No Office Hours Today"
  } else if (n == 1){
    if (noOH(officeHours.Monday)== "N/A"){
      return "No Office Hours Today"
    } else {
      return noOH(officeHours.Monday)
    }
  } else if (n == 2){
    if (noOH(officeHours.Tuesday)== "N/A"){
      return "No Office Hours Today"
    } else {
      return noOH(officeHours.Tuesday)
    }
  } else if (n == 3){
    if (noOH(officeHours.Wedneday)== "N/A"){
      return "No Office Hours Today"
    } else {
      return noOH(officeHours.Wedneday)
    }
  } else if (n == 4){
    if (noOH(officeHours.Thursday)== "N/A"){
      return "No Office Hours Today"
    } else {
      return noOH(officeHours.Thursday)
    }
  } else if (n == 5){
    if (noOH(officeHours.Friday)== "N/A"){
      return "No Office Hours Today"
    } else {
      return noOH(officeHours.Friday)
    }
  } else if (n == 6){
    return "No Office Hours Today"
  }
}

//Function called to set theme onwindow load or when theme is changed;
//themes[nav,bg,text,secondaryBG, modalBG, navText, type]
function setupThemeProfessor() {
  console.log('Setting Up Theme')
    let nav = document.querySelector('.navbar');
    let body = document.querySelector('body');
    let themes = JSON.parse(localStorage.getItem('themes'));

    let buttons = document.querySelectorAll('#button');
    let weekday = document.querySelector('.weekdays');
    let marquee = document.querySelector('marquee');
    let marqueeFont = document.querySelector('marquee font');
    console.log(marqueeFont);

    /* Consistent Across All Pages */
    nav.style.backgroundColor = themes[0];
    nav.style.color = themes[3];
    body.style.backgroundColor = themes[1];
    body.style.color = themes[2];

    /* Page Specific */
    marquee.style.backgroundColor = themes[1];
    marqueeFont.style.color = themes[2];

    if(themes[6] == 'dark'){

      buttons.forEach(btn => {
        btn.classList.remove('umd-button');
        btn.classList.add('dark-button');
      })
      weekday.classList.remove("umd-weekdays")

    }else if(themes[6] == 'umd'){

      buttons.forEach(btn => {
        btn.classList.remove('dark-button');
        btn.classList.add('umd-button');
      })
      weekday.classList.add("umd-weekdays")

      
    }else{
      buttons.forEach(btn => {
        btn.classList.remove('dark-button');
        btn.classList.remove('umd-button');
      })
      weekday.classList.remove("umd-weekdays")

    }
}

function setupProfessorName(){
  let name = document.querySelector("#name");
  name.innerHTML = `${JSON.parse(localStorage.getItem('professorName'))}'s Office`;
}

