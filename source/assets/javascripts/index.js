import 'bootstrap';
import $ from 'jquery';

// Typed text on banner
import Typed from 'typed.js';

if (document.getElementById("animate")) {
  new Typed('#animate', {
    strings: ['That Can Code!!', 'That Can Code!!'],
    typeSpeed: 80,
    loop: true
  });
}


// Add smooth scrolling to # anchors
$(document).ready(function () {
  // Add smooth scrolling to all links
  $(".smooth").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// Carousel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
window.plusSlides = plusSlides;
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
window.currentSlide = currentSlide;

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
