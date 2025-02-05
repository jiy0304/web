
$('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['o’neul', 'Value', 'Menu', 'Room'],
    showActiveTooltip: true,
    autoScrolling: true,
    responsiveWidth: 1024,
    onLeave: function (origin, destination, direction, trigger) {
        if (destination == 5) {
            $("#fp-nav").fadeOut();
        } else {
            $("#fp-nav").fadeIn();
        }
    }
});


// 모바일 메뉴
$(".ham").click(function () {
    $(".mgnb_wrap").animate({
        left: "0"
    });
});

$(".mgnb_close").click(function () {
    $(".mgnb_wrap").animate({
        left: "100%"
    });
});


const menu_list = new Swiper(".menu_list", {
    autoplay: {
        delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        574: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

const room_list = new Swiper(".room_list", {
    autoplay: {
        delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});



