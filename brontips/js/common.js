// JavaScript Document

$(document).ready(function () {

    if (window.matchMedia("(min-width: 1024px)").matches) {
        /* 뷰포트 너비가 1024 픽셀 이상 */
        $(window).scroll(function () {
            let pos = $(this).scrollTop();
            if (pos > 300) {
                $(".gotop").fadeIn();
            } else {
                $(".gotop").fadeOut();
            }
        });
        $(".gotop").click(function () {
            $("html,body").animate({
                scrollTop: 0
            });
        });
    } else {
        /* 뷰포트 너비가 1024 픽셀 미만 */
        $(".gotop").hide();
    }


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







