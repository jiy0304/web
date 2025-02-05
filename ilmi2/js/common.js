
// 상단메뉴
$(".gnb > li").mouseenter(function () {
  $("#header").addClass("active");
  $(".depth2_bg").stop().fadeIn();
  $(this).children(".depth2").stop().fadeIn();
});

$(".gnb > li").mouseleave(function () {
  $("#header").removeClass("active");
  $(".depth2_bg").stop().fadeOut();
  $(this).children(".depth2").stop().fadeOut();
});


// 모바일 메뉴
$(".ham").click(function () {
  $(".mgnb_wrap").fadeIn();
});

$(".mgnb_close").click(function () {
  $(".mgnb_wrap").fadeOut();
});


//모바일 2차메뉴
$(".mgnb > li").click(function () {
  $(this).children(".mdepth2").slideDown();
  $(this).siblings().children(".mdepth2").slideUp();
});


