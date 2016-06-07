// one_page.js


/* 헤더 메뉴 이벤트 */
var onePage = function(){
    var gnb_a = $("#nav").find("a");
    gnb_a.on("click", function(e){
       e.preventDefault();
        var a_hash = $(this. hash),
            offset_top = a_hash.offset().top,
            bodyBox = $("html,body");
   bodyBox.animate({scrollTop:offset_top - 100},1000);
    });
};


/* 사이드 메뉴 이벤트 */
var sideBar = function(){
    var gnb_a = $("#naSideNavi").find("a");
    gnb_a.on("click", function(e){
       e.preventDefault();
        var a_hash = $(this. hash),
            offset_top = a_hash.offset().top,
            bodyBox = $("html,body");
   bodyBox.animate({scrollTop:offset_top - 100},1000);    
        
    });
};

var scrBtn = function(){
    var scrBtn_a = $('#naScroll_btn').find('a');
    scrBtn_a.on('click', function(e){
        e.preventDefault();
        var a_hash = $(this.hash),
            offset_top = a_hash.offset().top,
            bodyBox = $('html,body');
        bodyBox.animate({scrollTop:offset_top - 160},1000);
    });
};







