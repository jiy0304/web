// JavaScript Document

$(document).ready(function () {

    $('#fullpage').fullpage({
        menu: '.gnb',
        navigation: true,
        anchors: ['menu1', 'menu2', 'menu3', 'menu4'],
        navigationTooltips: ['아쿠아플라넷', '프로그램', '이용안내', '혜택안내'],
        navigationPosition: 'left',
        showActiveTooltip: true,
        autoScrolling: true,
        responsiveWidth: 1024,
        onLeave: function (origin, destination, direction, trigger) {
            if (destination == 5) {
                $("#fp-nav").fadeOut(300);
            } else {
                $("#fp-nav").fadeIn(300);
            }
        }
    });


    // 모바일 메뉴
    $(".mgnb_wrap").hide();
    $(".ham").click(function () {
        $(".mgnb_wrap").fadeIn();
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").fadeOut();
    });


});
