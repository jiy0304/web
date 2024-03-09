// JavaScript Document

$(document).ready(function () {


    // 모바일 메뉴
    $(".ham").click(function () {
        $(".mgnb_wrap").animate({
            left: '0'
        });
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").animate({
            left: '100%'
        });
    });



    //모바일 2차메뉴
    $(".mdepth2").hide();

    $(".mgnb > li").click(function () {
        $(this).children(".mdepth2").slideDown();
        $(this).siblings().children(".mdepth2").slideUp();
    });




}); // 문서준비이벤트 종료







