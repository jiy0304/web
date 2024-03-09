// JavaScript Document

$(document).ready(function () {

    // 배열(Array)는 여러 값을 하나의 변수에 저장, []로 감싸고 ,로 요소들을 구분 
    let scroe = ["90", "80", "70", "60"];
    scroe.push("50"); // push() 메서드는 배열의 끝에 새로운 요소를 추가할때 사용
    console.log(scroe);

    let gnb = [];
    $(".gnb li a").each(function () {
        gnb.push($(this).text());
    });
    console.log(gnb);

    // $("선택자").each(function () { }
    // 배열에 저장된 문서 객체만큼 메서드가 반복 실행
    // 배열에 저장된 객체의 인덱스 순서대로 하나씩 접근하여 객체를 선택하고 인덱스를 구함


    $(".form_item_01 input").click(function () {
        let checkValue = [];
        $(".form_item_01 input:checked").each(function () {
            checkValue.push($(this).val());
        });
        $(".kind").text(checkValue).addClass("active");
        if (checkValue.length == 0) {
            $(".kind").text("프로젝트 형태").removeClass("active");
        }
    });


    $(".form_item_02 label").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        let useTxt = $(this).text();
        $(".use").text(useTxt).addClass("active");
    });

    $(".form_item_03 select").change(function () {
        let priceTxt = $(this).find("option:selected").text();
        $(".price").text(priceTxt).addClass("active");
    });

    $(".form_item_04 select").change(function () {
        let termTxt = $(this).find("option:selected").text();
        $(".term").text(termTxt).addClass("active");
    });

});
