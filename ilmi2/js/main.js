
AOS.init({
    duration: 1000,
});

// 메인 슬라이드
const visual_list = new Swiper(".visual_list", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1500,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$(".pause").click(function () {
    visual_list.autoplay.stop();
    $(this).hide();
    $(".play").show();
});
$(".play").click(function () {
    visual_list.autoplay.start();
    $(this).hide();
    $(".pause").show();
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
        el: ".swiper-pagination",
        type: "progressbar",
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});



// 탭메뉴
$(".new_img li:not(:first-child)").hide();
$(".new_list button").click(function () {
    let idx = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".new_img li").eq(idx).fadeIn().siblings().fadeOut(0);
});



