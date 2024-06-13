$(document).ready(function () {


    // 헤더
    $("#header").hover(function () {
        $("#header h1 img").attr("src", "../images/common/logo_b.png");
    }, function () {
        $("#header h1 img").attr("src", "../images/common/logo_w.png");
    });


    // 상단메뉴
    $(".depth2,.depth2_bg").hide();

    $(".gnb>li").hover(function () {
        $("#header").toggleClass("on");
        $(".depth2_bg").stop().fadeToggle();
        $(this).children(".depth2").stop().fadeToggle();
    });



    // 모바일 메뉴
    $(".mgnb_wrap").hide();
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




    // 메인 슬라이드
    const mv = new Swiper('.mv', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1500,
        pagination: {
            el: "#main_visual .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.mv_play').hide();
    $('.mv_pause').click(function () {
        mv.autoplay.stop();
        $('.mv_pause').hide().siblings().show();
    });
    $('.mv_play').click(function () {
        mv.autoplay.start();
        $('.mv_play').hide().siblings().show();
    });



    // 베스트 슬라이드
    const best_list = new Swiper(".best_list", {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: "#best .swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    $('.best_play').hide();
    $('.best_pause').click(function () {
        best_list.autoplay.stop();
        $('.best_pause').hide().siblings().show();
    });
    $('.best_play').click(function () {
        best_list.autoplay.start();
        $('.best_play').hide().siblings().show();
    });



    // 탭메뉴
    $('.new_img li:not(:first-child)').hide();
    $('.new_list li').click(function () {
        let idx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.new_img li').eq(idx).fadeIn().siblings().fadeOut(0);
    });



    // 아코디언 배너
    $("#family ul li:nth-child(1)").addClass("active");
    $("#family ul li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });



});







