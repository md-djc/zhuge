/**
 * Created by liuha on 2018/9/9.
 */
$('.list_screent span').click(function(){
    $(this).addClass('current');
    $(this).siblings('span').removeClass('current');
    if($(this).children('a').html()=='按区域查询'){
        $('.list_screenb .list_screenb_address').css({'display':'block'})
        $('.list_screenb .list_screenb_subway').css({'display':'none'})
    }
    if($(this).children('a').html()=='按地铁查询'){
        $('.list_screenb .list_screenb_address').css({'display':'none'})
        $('.list_screenb .list_screenb_subway').css({'display':'block'})
    }
})