// video_gallery.js

$(document).ready(function(){
                $(".main_vd").html("<iframe>").find("iframe").width(660).attr("src","https://www.youtube.com/embed/0BVkWybK_qI");
    /* 비디오 메인 화면에 띄우기 */
    var galleryLink = $(".na_vd_gallery").find("li");
                galleryLink.on("click", function(e){
                    e.preventDefault();
                    var indexI = $(this).index(),
                        indM = indexI - 2,
                    dataBig = $(".na_vd_gallery").find('li').eq(indM).find("iframe").attr("data-big");
                   
                    $("#na_video").find("iframe").attr("src", dataBig);
                    
                });

});

/* 비디오 썸네일 슬라이드 버튼 */
$(document).ready(function(){
      $('.vd_left_btn').on('click', function(){
        var vd_gall = $('.na_vd_gallery').children('li'),
                vd_gall_width = vd_gall.width();
            
            vd_gall.first().stop().animate({marginLeft:vd_gall_width}, 1000, function(){
            vd_gall.css({marginLeft:0}).last().prependTo('.na_vd_gallery');    
        }); 
    });
    $('.vd_right_btn').on('click', function(){
         var banner_li = $('.na_vd_gallery').children('li'),
                banner_li_width = vd_gall.width();
            vd_gall.first().stop().animate({marginLeft:-vd_gall_width}, 1000, function(){
            vd_gall.css({marginLeft:0}).first().appendTo('.na_vd_gallery');    
        }); 
    });
});