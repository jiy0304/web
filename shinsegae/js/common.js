$(document).ready(function () {

    $(".depth2").hide();

    $(".gnb > li").mouseenter(function () {
        $(this).find(".depth2").stop().slideDown();
    });
    $(".gnb > li").mouseleave(function () {
        $(this).find(".depth2").stop().slideUp();
    });



    //메인배너
    const mv = new Swiper(".mv", {
        autoplay: {
            delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        speed: 1000, // 슬라이드 동작 속도
        pagination: {
            el: ".swiper-pagination",
            type: "fraction", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true, // 버튼 클릭 여부
        },
        navigation: {
            nextEl: '.swiper-button-next', // 다음 버튼
            prevEl: '.swiper-button-prev', // 이전 버튼
        },
    });


    //이벤트
    const event_list = new Swiper(".event_list", {
        slidesPerView: 3.5,
        spaceBetween: 30, // 슬라이드 사이 여백
        autoplay: {
            delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        speed: 1000, // 슬라이드 동작 속도
    });



    //아트
    const art_list = new Swiper(".art_list", {
        autoplay: {
            delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        speed: 1000, // 슬라이드 동작 속도
        effect: "fade", // 페이드 효과
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: '.swiper-button-next', // 다음 버튼
            prevEl: '.swiper-button-prev', // 이전 버튼
        },
    });



});
