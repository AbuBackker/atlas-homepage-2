(function($) {
  
  "use strict";

  $(window).on('load', function() { 
    $('.preloader').delay(350).fadeOut('slow'); 
  }); 
  
$(".btn-play").magnificPopup({
  type: "iframe",
});

function counterInit() {
  document.querySelectorAll('.counter').forEach(el => {
    let start = 0;
    let end = el.dataset.number
    let suffix = el.dataset.suffix || ''
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(9000 / range));
    var timer = setInterval(function() {
      current += increment;
      el.innerHTML = current + suffix;
      if (current == end) {
          clearInterval(timer);
      }
  }, stepTime);
  
  });
}

counterInit();

})(jQuery);

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
});

new Swiper('.testimonials', {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});
