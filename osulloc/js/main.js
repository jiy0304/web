// JavaScript Document

$(document).ready(function () {



    // 메인 배너 슬라이드
    const mb = new Swiper('.mb', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.mb_play').hide();
    $('.mb_pause').on('click', function () {
        mb.autoplay.stop();
        $('.mb_pause').hide();
        $('.mb_play').show();
    });
    $('.mb_play').on('click', function () {
        mb.autoplay.start();
        $('.mb_pause').show();
        $('.mb_play').hide();
    });


    // 공지사항 슬라이드
    const news_list = new Swiper(".news_list", {
        direction: "vertical",
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });


    // 제품 슬라이드
    const prd_list = new Swiper(".prd_list", {
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: true,
        //centeredSlides: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 200,
            draggable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });



    // 티웨어 브랜드 탭메뉴
    $('.brand_list li').eq(0).addClass('active');
    $('.brand_list li').eq(0).find('.brand_intro').show();

    $('.brand_list li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).find('.brand_intro').fadeIn();
        $(this).siblings().find('.brand_intro').fadeOut();
    });




    // 제주티 뮤지엄 아코디언 배너
    $("#museum ul li").eq(0).addClass("active");
    $("#museum ul li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });



});







