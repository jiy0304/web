
// visual_list
const visual_list = new Swiper(".visual_list", {
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// system_list
const system_list = new Swiper(".system_list", {
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    715: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1130: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

