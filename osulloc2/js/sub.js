// JavaScript Document

$(document).ready(function () {


    // 헤더
    $("#header").hover(function () {
        $("#header h1 img").attr("src", "../images/common/logo.png");
    }, function () {
        $("#header h1 img").attr("src", "../images/common/logo_w.png");
    });


    // 상단메뉴
    $(".depth2,.depth2_bg").hide();

    $(".gnb>li").mouseenter(function () {
        $(".depth2_bg").stop().fadeIn();
        $(this).children(".depth2").stop().fadeIn();
    });
    $(".gnb>li").mouseleave(function () {
        $(".depth2_bg").stop().fadeOut();
        $(this).children(".depth2").stop().fadeOut();
    });



    // 검색영역
    $(".search").hide();

    $(".btn_search").click(function () {
        $(this).toggleClass("active");
        $(".search").fadeToggle();
    });



    // 모바일 메뉴
    $(".mgnb_wrap").hide();
    $(".btn_ham").click(function () {
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




});







