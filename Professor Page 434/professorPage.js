

'use strict'; 
window.onload =  function(){
    DateDisplay();
    showSlides();

   
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

var slideIndex = 0;


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
} 
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}


