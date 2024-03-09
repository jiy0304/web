
const mb = new Swiper(".mb", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const sns_list = new Swiper(".sns_list", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    speed: 500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const h_txt = new Swiper(".h_txt", {
    slidesPerView: 2.4,
    loop: true,
    speed: 10000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});

