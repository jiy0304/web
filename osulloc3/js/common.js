// 상단메뉴
$(".gnb > li").mouseenter(function () {
  $("#header").addClass("active");
  $(".depth2_bg").stop().fadeIn();
  $(this).children(".depth2").stop().fadeIn();
  $(".search").fadeOut();
  $(".btn_search").removeClass("active");
});

$(".gnb > li").mouseleave(function () {
  $("#header").removeClass("active");
  $(".depth2_bg").stop().fadeOut();
  $(this).children(".depth2").stop().fadeOut();
});


// 검색영역
$(".btn_search").click(function () {
  $("#header").toggleClass("active");
  $(this).toggleClass("active");
  $(".search").fadeToggle();
});


// 모바일 메뉴
$(".btn_menu").click(function () {
  $(".mgnb_wrap").fadeIn();
});
$(".mgnb_close").click(function () {
  $(".mgnb_wrap").fadeOut();
});

$(window).scroll(function () {
  let pos = $(this).scrollTop();
  if (pos > 300) {
    $("#header").addClass("fix");
  } else {
    $("#header").removeClass("fix");
  }
});

