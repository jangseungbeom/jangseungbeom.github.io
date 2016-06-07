$(document).ready(function(){
    $('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
  
});

function popUp(){
    var popUp = $('#popBox'),
            logBox = $('#gnb'),
            closePop = popUp.find('.cls_btn');
    
    popUp.hide();
    
    logBox.find('ul').children('li').eq(1).on('click', function(){
        popUp.show();
    })
    
    closePop.on('click', function(){
        popUp.fadeOut();
    })
};
