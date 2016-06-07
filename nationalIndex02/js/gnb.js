// gnb.js

$(document).ready(function(){
    var naHead = $('#naHead'),
            naBtn = naHead.children('.icon_box'),
            naGnb = $('#gnb');
        
    naGnb.hide();    
    /* 메뉴 슬라이드 토글 */
    naBtn.on('click', function(){
        //console.log('tttttt');
       naGnb.slideToggle();
    });
   
    
    /* 메뉴 아이콘 효과 */
    $('.icon_box').on('click', function(){
        $(this).toggleClass('open'); 
    });
});