// pfolio_mobile.js

$(document).ready(function(){
    var moHead = $('#headBox'),
            moBtn = moHead.children('.icon_box'),
            moMenu = $('#menu'),
            mainMenu = $('#mainMenu');
    
    /* 메뉴 슬라이드 토글 */
    moBtn.on('click', function(){
        //console.log('tttttt');
       moMenu.slideToggle();
    });
    
    /* 메뉴 아이콘 효과 */
    $('.icon_box').on('click', function(){
        $(this).toggleClass('open');
    });
    
    /* 반응형 부분 */
        var win = $(window),
            winW = win.width();

        var winResize = function(){

            var win = $(window),
                winW = win.width();
            
            if(winW <= 640 ){

                /* content 메뉴 숨기기 */
                $(".mos_me").hide();
                $(".mos_ma").hide();
                
            }else if(winW >= 641 && winW <= 768){

                /* content 메뉴 보이기 */
               /* $(".tab_01_me").show();
                $(".tab_01_ma").hide();*/
                
            }else if(winW >= 769 && winW <= 1024){

               /* $(".tab_02_me").hide();
                $(".tab_02_ma").show();
                */
            }else if(winW > 1025){
                /* content 메뉴 보이기 */
               /* $(".pc_me").hide();
                $(".pc_ma").show();*/
            }
        };
            winResize();

        var winWidth = $(window).width();

            win.on('resize',function(){
                if( $(window).width() != winWidth){
                    location.reload();
                }
            winResize();
        });
    
     /* 탑 버튼 */
      $("#topButton").hide();
            $(window).scroll(function(){
                if ($(this).scrollTop() > 30) {
                    $("#topButton").fadeIn();
                } else {
                    $("#topButton").fadeOut();
                }
            });
            $("#topButton").on("click",function(){
                $('html,body').animate({scrollTop: 0}, 800);
                return false;
            });
});