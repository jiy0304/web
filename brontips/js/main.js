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
            type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true, // 버튼 클릭 여부
        },
        navigation: {
            nextEl: '.swiper-button-next', // 다음 버튼
            prevEl: '.swiper-button-prev', // 이전 버튼
        },
    });




    // favor_face 슬라이드
    const favor_face = new Swiper(".favor_face", {
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
        observer: true,
        observeParents: true,
    });


    // favor_other 슬라이드
    const favor_other = new Swiper(".favor_other", {
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
        observer: true,
        observeParents: true,
    });


    $(".favor_other").hide();
    $(".tab li").click(function () {
        let iNum = $(this).index();
        $(".favor_list > div").eq(iNum).show().siblings().hide();
    });


    $(".over").hide();
    $(".prd_item").mouseenter(function () {
        $(this).find(".thumb").hide().siblings(".over").show();
    });
    $(".prd_item").mouseleave(function () {
        $(this).find(".thumb").show().siblings(".over").hide();
    });




    $('.insta_list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });



});




