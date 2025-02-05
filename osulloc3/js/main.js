// AOS.init({
//     duration: 1500,
//     disable: 'mobile',
// });

// 메인 배너 슬라이드
const banner_list = new Swiper(".banner_list", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// 메인 배너 정지 재생
$(".pause").click(function () {
    banner_list.autoplay.stop();
    $(this).hide();
    $(".play").show();
});
$(".play").click(function () {
    banner_list.autoplay.start();
    $(this).hide();
    $(".pause").show();
});


// 공지사항 슬라이드
const notice_list = new Swiper(".notice_list", {
    direction: "vertical",
    loop: true,
    speed: 800,
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
    centeredSlides: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
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


// 탭메뉴
$(".teaware_btn button").click(function () {
    //clearInterval(teaware);
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $(".teaware_img li").eq(idx).fadeIn().siblings().hide();
});


let idx = 0;
const teaware = setInterval(() => {
    if (idx < 3) {
        idx++;
    } else {
        idx = 0;
    }
    $(".teaware_btn button").eq(idx).addClass("active").siblings().removeClass("active");
    $(".teaware_img li").eq(idx).fadeIn(1000).siblings().hide();
}, 3000);

// let pic = 0;
// setInterval(() => {
//     if (pic < 2) {
//         pic++;
//     } else {
//         pic = 0;
//     }
//     $(".story_img img").eq(pic).fadeIn(500).siblings().hide();
// }, 3000);


