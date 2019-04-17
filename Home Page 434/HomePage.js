
'use strict';



//will call all respective functions when
window.onload = function () {
    DateDisplay();
    showDivs(slideIndex);
   
}



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
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
  
    dots[i].style.background = "#e7e7e7"
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].style.background = "rgb(201, 0, 0)";
}

function DateDisplay() {
    var today = new Date();
    document.getElementById("time").innerHTML = (today.getMonth() + 1) + "/"
      + today.getDate() + "/"
      + today.getFullYear() + " @ "
      + today.getHours() + ":"
      + today.getMinutes() + ":"
      + today.getSeconds();
  }
  

