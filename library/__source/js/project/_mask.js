/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(window).load(function () {
    $(".mask").each(function () {
        var width = $(this).parent().width();
        var height = $(this).parent().height();
        $(this).css('width', width);
        $(this).css('height', width);
    });


    $(".mask-trigger").hover( function () {
        
        /*
        $(this).parent().siblings('.mask').css('top', '0px');
        $(this).children('img').each(function(){
            if($(this).hasClass('hide')){
                $(this).removeClass('hide');
            }else{
                $(this).addClass('hide')

            }
        });*/
        a
    });
    $(".mask-trigger").mouseleave(function () {
        $(this).parent().siblings('.mask').css('top', '400px');
        
    });
});


