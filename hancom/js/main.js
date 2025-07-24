
// visual_list
const visual_list = new Swiper(".visual_list", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// prd_list
const prd_list = new Swiper(".prd_list", {
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    850: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

