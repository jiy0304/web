// JavaScript Document

$(document).ready(function () {


    // 검색
    $('.search').hide();
    $('.btn_search').click(function () {
        $('.search').fadeIn();
    });
    $('.search_close').click(function () {
        $('.search').fadeOut();
    });


    // 모바일메뉴
    $(".ham").click(function () {
        $(".mgnb_wrap").animate({
            right: '0'
        });
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").animate({
            right: '100%'
        });
    });



    // 2차메뉴
    $('.depth2').hide();
    $('.gnb > li').hover(function () {
        $(this).find('.depth2').stop().fadeToggle();
    });


    const brand_txt_list = new Swiper(".brand_txt_list", {
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
    });


    const brand_img_list = new Swiper(".brand_img_list", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    brand_txt_list.controller.control = brand_img_list;
    brand_img_list.controller.control = brand_txt_list;


    const landmark_list = new Swiper(".landmark_list", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1000: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });



    // 모달영상
    $(".movie_modal").hide();
    $(".btn_play").click(function () {
        $(".movie_modal").fadeIn();
        $(".movie_modal video").get(0).currentTime = 0;
        // $(".movie_modal video")[0].currentTime = 0;
        // $("video")[0].play();
    });
    $(".movie_close").click(function () {
        $(".movie_modal").fadeOut();
        // $("video")[0].pause();
    });



    $(".gotop").click(function () {
        $(window).scrollTop(0);
    });


});







