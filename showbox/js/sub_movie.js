// sub_movie.js

$(document).ready(function(){
    $('#movie_box').tabs();
    
    var tabs01 = $('.tabs01'),
        tabs02 = $('.tabs02');
    
    tabs01.on("click", function(){
        tabs01.addClass("on");
        tabs02.removeClass("on");
    });
    tabs02.on("click", function(){
        tabs01.removeClass("on");
        tabs02.addClass("on");
    });
});// jquery