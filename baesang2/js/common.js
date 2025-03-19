$(document).ready(function () {

  $(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().slideToggle();
  });

  $(".btn_search").click(function () {
    $(".search").fadeIn();
  });
  $(".search_close").click(function () {
    $(".search").fadeOut();
  });


  $(".btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
  });

  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
  });


  const visual_list = new Swiper(".visual_list", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  const insight_list = new Swiper(".insight_list", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        // 가로해상도가 768px 이상일 경우
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        // 가로해상도가 1024px 이상일 경우
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });




});
