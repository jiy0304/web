$(document).ready(function () {

  $(".depth2").hide();

  $(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().slideToggle();
  });


  const mv = new Swiper(".mv", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
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


  const news_list = new Swiper(".news_list", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });


  const sns_list = new Swiper(".sns_list", {
    slidesPerView: 3.5,
    spaceBetween: 40,
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
  });


  const members_list = new Swiper(".members_list", {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 3000,
    },
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  $('.modal').hide();
  $('.btn_play').click(function () {
    $('.modal').show();
    $('body').css({ 'overflow': 'hidden' });
  });

  $('.btn_close').click(function () {
    $('.modal').hide();
    $('body').css({ 'overflow': 'auto' });
  });


});
