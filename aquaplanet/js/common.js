// JavaScript Document

$(document).ready(function () {

    $('#fullpage').fullpage({
        menu: '.gnb',
        navigation: true,
        anchors: ['menu1', 'menu2', 'menu3', 'menu4'],
        navigationTooltips: ['아쿠아플라넷', '프로그램', '이용안내', '혜택안내'],
        navigationPosition: 'left',
        showActiveTooltip: true,
        autoScrolling: true,
        responsiveWidth: 1024,
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex == 5) {
                $("#fp-nav").fadeOut(300);
            } else {
                $("#fp-nav").fadeIn(300);
            }
        }
    });


    // 모바일 메뉴
    $(".mgnb_wrap").hide();
    $(".ham").click(function () {
        $(".mgnb_wrap").fadeIn();
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").fadeOut();
    });


    $(".depth2,.depth2_bg").hide();

    $(".gnb > li").mouseenter(function () {
        $("#header h1 img").attr("src", "images/logo_63.png");
        $("#header").addClass("on");
        $(".depth2_bg").stop().slideDown();
        $(this).find(".depth2").stop().fadeIn(500);
    });

    $(".gnb > li").mouseleave(function () {
        $("#header h1 img").attr("src", "images/logo_w.png");
        $("#header").removeClass("on");
        $(".depth2_bg").stop().slideUp();
        $(this).find(".depth2").stop().fadeOut(100);
    });



});
