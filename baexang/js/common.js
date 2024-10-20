$(document).ready(function () {



  $('.depth2').hide();
  $('.gnb > li').mouseenter(function () {
    $(this).children('.depth2').stop().slideDown();
  });
  $('.gnb > li').mouseleave(function () {
    $(this).children('.depth2').stop().slideUp();
  });

  $(".search").hide();
  $(".btn_search").click(function () {
    $(".search").fadeIn();
    $(".search input[type='text']").focus();
  });
  $(".search_close").click(function () {
    $(".search").fadeOut();
  });

  $('.mgnb_wrap').hide();

  $('.btn_ham').click(function () {
    $('.mgnb_wrap').fadeIn();
  });

  $('.mgnb_close').click(function () {
    $('.mgnb_wrap').fadeOut();
  });


  //모바일 2차메뉴
  $(".mdepth2").hide();

  $(".mgnb > li").click(function () {
    $(this).children(".mdepth2").slideDown();
    $(this).siblings().children(".mdepth2").slideUp();
  });


  const mv = new Swiper(".mv", {
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  const insight_list = new Swiper(".insight_list", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      dragSize: 200,
    },
    breakpoints: {
      768: {
        // 가로해상도가 768px 이상일 경우
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        // 가로해상도가 1024px 이상일 경우
        slidesPerView: 4.5,
        spaceBetween: 30,
      },
    },
  });




});
