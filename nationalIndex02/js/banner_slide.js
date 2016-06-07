// banner_slide.js

function banner(){
    var s_time = 1000,
            s2_time = 2000;

    $('.na_left_btn').on('click', function(){
        var banner_li = $('.na_banner_box').children('li'),
                banner_li_width = banner_li.width();
            
            banner_li.first().stop().animate({marginLeft:banner_li_width}, 1000, function(){
            banner_li.css({marginLeft:0}).last().prependTo('.na_banner_box');    
        }); 
    });
    $('.na_right_btn').on('click', function(){
         var banner_li = $('.na_banner_box').children('li'),
                banner_li_width = banner_li.width();
            banner_li.first().stop().animate({marginLeft:-banner_li_width}, 1000, function(){
            banner_li.css({marginLeft:0}).first().appendTo('.na_banner_box');    
        }); 
    });
var timer;
        // 일정한 시간간격을 두고 움직이는 기능 : setInterval
    function startBtn(){timer = setInterval('$(".na_right_btn").click()', 5000)};
    startBtn();
    function stopBtn(){ clearInterval(timer)}; 
        //clearInterval 은 setInterval을 없애는 기능
       
    $('#naBanner').on({'mouseover': stopBtn, 'mouseout': startBtn });
//    setInterval($('.right_btn').click(), 1000);
};