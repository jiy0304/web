$(document).ready(function () {


    //모바일메뉴
    $(".dim").hide();
    $(".ham").click(function () {
        $(".dim").fadeIn();
        $(".mgnb_wrap").animate({
            "right": "0"
        });
    });

    $(".mgnb_close").click(function () {
        $(".dim").fadeOut();
        $(".mgnb_wrap").animate({
            "right": "-100%"
        });
    });



    //2차메뉴
    $(".depth2").hide();

    $(".gnb > li").mouseenter(function () {
        $(this).children(".depth2").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function () {
        $(this).children(".depth2").stop().fadeOut();
    });


    //모바일 2차메뉴
    $(".mdepth2").hide();

    $(".mgnb > li").click(function () {
        $(this).children(".mdepth2").slideDown();
        $(this).siblings().children(".mdepth2").slideUp();
    });




    $(".search").hide();
    $(".btn_search").click(function () {
        $(".search").fadeIn();
        $(".search input[type='text']").focus();
    });
    $(".search_close").click(function () {
        $(".search").fadeOut();
    });



    const mv = new Swiper(".mv", {
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });


    const story_list = new Swiper(".story_list", {
        slidesPerView: 1,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            800: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });



    const product_list = new Swiper(".product_list", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1000: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });




});
