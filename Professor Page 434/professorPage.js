

'use strict';

//will call all respective functions when
window.onload = function () {
  DateDisplay();
  showSlides();
  status(true);
  ohButton();
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
    + today.getHours() + ":"
    + today.getMinutes() + ":"
    + today.getSeconds();
}

//sets up professor announcments slides
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}


//
function setWeeklyOfficeHours(){

}


