$(document).ready(function () {




    //모바일메뉴
    $('.mgnb_wrap').hide();

    $('.mnav').click(function () {
        $('.mgnb_wrap').fadeIn();
    });

    $('.mgnb_close').click(function () {
        $('.mgnb_wrap').fadeOut();
    });



    //2차메뉴
    $(".depth2").hide();

    $(".gnb>li").mouseenter(function () {
        $(this).children(".depth2").stop().slideDown();
    });
    $(".gnb>li").mouseleave(function () {
        $(this).children(".depth2").stop().slideUp();
    });


    //모바일 2차메뉴
    $(".mdepth2").hide();

    $(".mgnb>li").click(function () {
        $(this).children(".mdepth2").slideDown();
        $(this).siblings().children(".mdepth2").slideUp();
    });




    //메인슬라이드
    $('.mv').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        fade: true
    });




});
