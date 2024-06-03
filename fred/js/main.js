// JavaScript Document

// 메인슬라이드
const mv = new Swiper(".mv", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
    },
    loop: true,
});


const menu_list = new Swiper(".menu_list", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    centeredSlides: true,
    speed: 1000,
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
        768: {
            // 가로해상도가 768px 이상일 경우
            slidesPerView: 3,
        },
        1200: {
            // 가로해상도가 1024px 이상일 경우
            slidesPerView: 4,
        },
    },
});



const brand_txt = new Swiper(".brand_txt", {
    slidesPerView: 1,
    grid: {
        rows: 3,
    },
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
});


const brand_img = new Swiper(".brand_img", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: brand_txt,
    },
});



