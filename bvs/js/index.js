$(document).ready(function(){
    /* 화면 높이 값 맞추기 */
    var hTop = $(window).height();
    
    $("section").height(hTop);
    
    $(window).on("resize", function(){
        var hTop = $(window).height();
        $("section").height(hTop);
    });
    
   var win = $(window),
        winW = win.width();
    
    if(winW => 1600){
    /* 마우스 움직임에 따른 이펙트 변화주기 */
    $("section").on("mousemove", function(e){
        var posX = e.pageX,
                posY = e.pageY;
        
        $(".e01").css({"right":20-(posX/30), "bottom":20-(posY/30)});
        $(".e02").css({"right":120+(posX/20), "bottom":-40+(posY/20)});
        $(".e03").css({"right":60+(posX/20), "top":180+(posY/20)});
      /*  $(".symbol").css({"right":445+(posX/405), "top":300+(posY/260)});
        $(".symbol2").css({"right":400+(posX/360), "top":400+(posY/360)});
        $(".symbol3").css({"right":380+(posX/340), "top":360+(posY/320)});
        $(".symbol4").css({"right":400+(posX/340), "top":360+(posY/320)});
        $(".symbol5").css({"right":400+(posX/340), "top":380+(posY/320)});*/
    });
    
    }else if(winW > 640){
    
        
    } ;
    
    /* 메뉴 버튼 클릭시 화면 이동 */
    $("#aside").find("#menu li").on("click", function(e){
        e.preventDefault();
        var hTop = $(window).height(),
               idx = $(this).index(),
               nowTop = idx*hTop;
        
        $("html, body").stop().animate({"scrollTop":nowTop}, 1200);
    });
    
    /* 메뉴 현재위치 표시 */
    $(window).on("scroll", function(){
        var hTop = $(window).height(),
               scroll = $(window).scrollTop();
        
        if(scroll>=hTop*0 && scroll<hTop*1){
            $("#aside").find("#menu li").removeClass();
            $("#aside").find("#menu li").eq(0).addClass("on");
        }
        if(scroll>=hTop*1 && scroll<hTop*2){
            $("#aside").find("#menu li").removeClass();
            $("#aside").find("#menu li").eq(1).addClass("on");
        }
        if(scroll>=hTop*2 && scroll<hTop*3){
            $("#aside").find("#menu li").removeClass();
            $("#aside").find("#menu li").eq(2).addClass("on");
        }
        if(scroll>=hTop*3 && scroll<hTop*4){
            $("#aside").find("#menu li").removeClass();
            $("#aside").find("#menu li").eq(3).addClass("on");
        }
        if(scroll>=hTop*4 && scroll<hTop*5){
            $("#aside").find("#menu li").removeClass();
            $("#aside").find("#menu li").eq(4).addClass("on");
        }
        if(scroll>=hTop*5 && scroll<hTop*6){
            $("#aside").find("#menu li").removeClass();
            $("#aside").find("#menu li").eq(5).addClass("on");
        }
        if(scroll>=hTop*6 && scroll<hTop*7){
            $("#aside").find("#menu li").removeClass();
            $("#aside").find("#menu li").eq(6).addClass("on");
        }
        if(scroll>=hTop*7 && scroll<hTop*8){
            $("#aside").find("#menu li").removeClass();
            $("#aside").find("#menu li").eq(7).addClass("on");
        }
    });
    
    /* 마우스 휠 */
    $("section").on("mousewheel", function(event, delta){
        if(delta > 0 ){
            var prev = $(this).prev().offset().top;
            $("html, body").stop().animate({"scrollTop":prev}, 1200, "easeInSine");
        }else if (delta < 0) {
             var next = $(this).next().offset().top;
            $("html, body").stop().animate({"scrollTop":next}, 1200, "easeInSine");
        }
    });
    
    /* 갤러리 */
        var galleryLink = $(".gallery").find("a");
     $("#gBox").html("<img>").find("img").width(100 + "%").attr("src","../img/gallery/01.jpg");
                galleryLink.on("click", function(e){
                    e.preventDefault();
                    var $this = $(this),
                            dataBig = $this.find("img").attr("data-big");
                   
                    $("#gBox").find("img").attr("src", dataBig);
                    
                });
    
/*    메뉴슬라이드

    $(".op_btn").on("click", function(){
        var $this = $(".op_btn"),
                this_css = $this.css('right');
        if( this_css <= "3.125vw" )  {
             $(".op_btn").stop().animate({"right":"50vw"},1200);
             $("#moMenu").stop().animate({"right":0},1200);
        } else{ 
             $(".op_btn").stop().animate({"right":"3.125vw"},1200);
             $("#moMenu").stop().animate({"right":"-50vw"},1200);
        }
    });*/
   
    /* 메뉴 슬라이드 */
        $(".op_btn").on("click", function(e){
            e.preventDefault();
            $(".op_btn").toggleClass("op_rt");
            $("#moMenu").toggleClass("rt");
        });
    
     /* 메뉴 버튼 클릭시 화면 이동 */
    $("#moMenu").find(".m_menu li").on("click", function(e){
        e.preventDefault();
        var hTop = $(window).height(),
               idx = $(this).index(),
               nowTop = idx*hTop;
        
        $("html, body").stop().animate({"scrollTop":nowTop}, 1200);
    });
    
      /* 메뉴 현재위치 표시 */
    $(window).on("scroll", function(){
        var hTop = $(window).height(),
               scroll = $(window).scrollTop();
        
        if(scroll>=hTop*0 && scroll<hTop*3){
            $("#moMenu").find(".m_menu li").removeClass();
            $("#moMenu").find(".m_menu li").eq(0).addClass("on");
        }
        if(scroll>=hTop*1 && scroll<hTop*2){
            $("#moMenu").find(".m_menu li").removeClass();
            $("#moMenu").find(".m_menu li").eq(1).addClass("on");
        }
             if(scroll>=hTop*2 && scroll<hTop*3){
            $("#moMenu").find(".m_menu li").removeClass();
            $("#moMenu").find(".m_menu li").eq(2).addClass("on");
        }
             if(scroll>=hTop*3 && scroll<hTop*4){
            $("#moMenu").find(".m_menu li").removeClass();
            $("#moMenu").find(".m_menu li").eq(3).addClass("on");
        }
             if(scroll>=hTop*4 && scroll<hTop*5){
            $("#moMenu").find(".m_menu li").removeClass();
            $("#moMenu").find(".m_menu li").eq(4).addClass("on");
        }
             if(scroll>=hTop*5 && scroll<hTop*6){
            $("#moMenu").find(".m_menu li").removeClass();
            $("#moMenu").find(".m_menu li").eq(5).addClass("on");
        }
             if(scroll>=hTop*6 && scroll<hTop*7){
            $("#moMenu").find(".m_menu li").removeClass();
            $("#moMenu").find(".m_menu li").eq(6).addClass("on");
        }
               if(scroll>=hTop*7 && scroll<hTop*8){
            $("#headBox").find(".m_menu li").removeClass();
            $("#headBox").find(".m_menu li").eq(7).addClass("on");
        }
        
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
             
}); //제이쿼리 끝부분







