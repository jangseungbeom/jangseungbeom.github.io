$(document).ready(function(){
    
//    $(".arco_btn").on('mouseenter',function(e){
//        e.preventDefault;
//        $(this).parent('ul').stop().animate({width: "50%", "z-index":500}, 500);
//        $(this).parent('ul').siblings('ul').stop().animate({width:"12.5%"," z-index":100}, 500);
//        $(this).css({color: "#222", "background-color": "#d1b400", "box-sizing": 'border-box', border:"1px solid #f2d100"})
//    });
//    }).on('mouseleave',function(e){
//        e.preventDefault;
//        $("#newsBox").children('ul').stop().animate({width: "20%", "z-index":100}, 500);
    
var new_btn = $('.new_list').find('li');
    new_btn.on('mouseenter', function(e){
        e.preventDefault();
        var $this = $(this),
                li_index = $this.index(),
                news = $('.news'),
                news_li = news.find('li');
        
        news_li.eq(li_index)
            .stop().animate({'width':'40%'},500)
            .siblings().stop().animate({'width':'14.5%'}, 500);
            
            $(news_li).eq(li_index).find('h3').stop().css({'color':'$white','font-size':'1.2rem'}).animate({'opacity':'1'},650);
            $(news_li).eq(li_index).find('p').stop().css({'color':'$white','font-size':'0.75rem'}).animate({'opacity':'1'},700);
          
           


        
        new_btn.on('mouseleave', function(e){
        e.preventDefault();
        news_li.eq(li_index).stop().animate({'width':'19.5%'}, 500)
        .siblings().stop().animate({'width':'19.5%'}, 500);
             $(news_li).eq(li_index).find('h3').stop().animate({'opacity':'0'},600);
            $(news_li).eq(li_index).find('p').stop().animate({'opacity':'0'},700);
           
       
            });
    });




});

/*$(document).ready(function(){
    var nBox = $("#newsBox");
        nBox.find(".arco_btn").on("mouseenter", function(){
            $(this).find("ul").stop().animate({width:"50%", "z-index":500}, 500);
            $(this).next("ul").stop();
        })
});*/