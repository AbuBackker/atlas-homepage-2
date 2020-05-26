"use strict";

$(".btn-play").magnificPopup({
  type: "iframe",
});

tns({
  container: ".portfolio-slider",
  items: 5,
  autoplay: true,
  gutter: 20,
  touch: true,
  controls: false,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 2,
    },
    700: {
      gutter: 30,
    },
    900: {
      items: 5,
    },
  },
});
