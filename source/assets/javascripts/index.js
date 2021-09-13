import 'bootstrap';
import $ from 'jquery';
import Typed from 'typed.js';

if (document.getElementById('animate')) {
  // eslint-disable-next-line no-new
  new Typed('#animate', {
    strings: ['Full-Stack Developer!', 'Front-End Developer!', 'Back-End Developer!'],
    typeSpeed: 80,
    loop: true
  });
}

// Add smooth scrolling to # anchors
$(document).ready(() => {
  $('.smooth').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      event.preventDefault();
      // Store hash
      const { hash } = this;
      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, () => {
        window.location.hash = hash;
      });
    }
  });
});
