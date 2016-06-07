// date.js

function date(){
    /* 날짜 (article > news 영역) */    
    var now = new Date();
    $(".mgz_now").text(now);
    var month = now.getMonth();
    var nowMon = month+1;
    $(".mgz_month").text(nowMon);
    var year = now.getFullYear();
    $(".mgz_year").text(year);  
};


/* ------------------ 아래로 news 버튼 슬라이드 영역입니다. ----------------------- */

//function newsSlide(){
//  var lBtn = $("#mgz_btn").find("li"),
//      mNews = $(".mainNews");
//
//    lBtn.each().on("click",function(){
//    var lBtn = $("#mgz_btn").find("li"),
//        mNews = $(".mainNews");   
//        mNews.each().slideToggle();
//    });
//    
//};

$(".mgz_btn_01").on('click',function(){
    $(".mn_box01").addClass("click");
})