

'use strict'; 
window.onload =  function(){
    DateDisplay();
    showDivs(slideIndex);
}

function DateDisplay(){
    var today = new Date();
    document.getElementById("time").innerHTML =  (today.getMonth()+1) + "/"
    +  today.getDate()  + "/" 
    + today.getFullYear() + " @ "  
    + today.getHours() + ":"  
    + today.getMinutes() + ":" 
    + today.getSeconds();
}



var slideIndex = 1; 

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}