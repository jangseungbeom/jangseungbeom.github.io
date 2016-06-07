// gallery.js

/* 갤러리 */
$(document).ready(function(){
    
    $(".fancybox-thumb").fancybox({
                 prevEffect : 'none',
                 nextEffect : 'none',
                 helpers : {
                     title : {
                         type: 'outside'
                         },
                     thumbs : {
                         width : 50,
                         height: 50
                     }
                 }
    });
             
             
});

/* 갤러리 버튼 */
$(document).ready(function(){
      $('.ng_left_btn').on('click', function(){
        var nGall_li = $('.n_gall').children('li'),
                nGall_width = nGall_li.width();
            
            nGall_li.first().stop().animate({marginLeft:nGall_width}, 1000, function(){
            nGall_li.css({marginLeft:0}).last().prependTo('.n_gall');    
        }); 
    });
    $('.ng_right_btn').on('click', function(){
         var nGall_li = $('.n_gall').children('li'),
                nGall_width = nGall_li.width();
            nGall_li.first().stop().animate({marginLeft:-nGall_width}, 1000, function(){
            nGall_li.css({marginLeft:0}).first().appendTo('.n_gall');    
        }); 
    });
});