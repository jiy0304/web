$(document).ready(function () {


    // main 슬라이드
    const mv = new Swiper(".mv", {
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true, // 버튼 클릭 여부
        },
        navigation: {
            nextEl: '.swiper-button-next', // 다음 버튼
            prevEl: '.swiper-button-prev', // 이전 버튼
        },
        parallax: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
    });




    // service_list 슬라이드
    const service_list = new Swiper(".service_list", {
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 2.5,
                spaceBetween: 50,
            },
            1400: {
                slidesPerView: 3.5,
                spaceBetween: 50,
            },
        },
        observer: true,
        observeParents: true,
    });


    // magazine_list 슬라이드
    const magazine_list = new Swiper(".magazine_list", {
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        breakpoints: {
            1024: {
                slidesPerView: 3.5,
                spaceBetween: 50,
            },
        },
        observer: true,
        observeParents: true,
    });


    $(".magazine_list").hide();
    $(".tab li").click(function () {
        let iNum = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".about_list > div").eq(iNum).show().siblings().hide();
    });




    $('.power_list').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });


    // $('.insta_list').slick({
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //     ]
    // });



});




