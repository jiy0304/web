$(document).ready(function () {



  //모바일메뉴
  $('.mgnb_wrap').hide();

  $('.ham').click(function () {
    $('.mgnb_wrap').fadeIn();
  });

  $('.mgnb_close').click(function () {
    $('.mgnb_wrap').fadeOut();
  });



  //2차메뉴
  $(".depth2").hide();

  $(".gnb > li").mouseenter(function () {
    $(this).children(".depth2").stop().fadeIn();
    let lineW = $(this).width();
    let lineP = $(this).position().left;
    $(".line").stop().animate({ width: lineW, left: lineP });
  });
  $(".gnb > li").mouseleave(function () {
    $(this).children(".depth2").stop().fadeOut();
    $(".line").stop().animate({ width: 0 });
  });



  //모바일 2차메뉴
  $(".mdepth2").hide();

  $(".mgnb>li").click(function () {
    $(this).children(".mdepth2").slideDown();
    $(this).siblings().children(".mdepth2").slideUp();
  });


  $(".btn_search").click(function () {
    $(".search").addClass("on");
    $(".search input[type=text]").focus();
  });
  $(".search input[type=text]").blur(function () {
    $(".search").removeClass("on");
  });


  const mv = new Swiper(".mv", {
    effect: "fade",
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: "#main_visual .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#main_visual .swiper-button-next",
      prevEl: "#main_visual .swiper-button-prev",
    },
  });



});
