$(window).scroll(function(){
    if($(window).scrollTop()>=($(window).width()/2)){
        $(".lh_hearderMoreImportant").css('background','#ffffff');
        $(".header_mainright a").css('color','#333333');
        $(".header_mainleft .header_ulnav li a").css('color','#333333');
        $(".header_address").css('color','#333333');
    }
    if($(window).scrollTop()<($(window).width()/2)){
        $(".lh_hearderMoreImportant").css('background','rgba(0,0,0,.4)');
        $(".header_mainright a").css('color','#ffffff');
        $(".header_mainleft .header_ulnav li a").css('color','#ffffff');
        $(".header_address").css('color','#ffffff');
    }
})
$(".header_mainleft .header_ulnav li").hover(function () {
    $(this).children('a').css('color','#ff8400');
},function () {
    if($(window).scrollTop()>=($(window).width()/2)){
        $(this).children('a').css('color','#333333');
    }
    if($(window).scrollTop()<($(window).width()/2)){
        $(this).children('a').css('color','#ffffff');
    }
})
$(".header_mainright a").hover(function () {
    $(this).addClass('header_act');
},function () {
    $(this).removeClass('header_act');
})
$(".header_mainleft .header_ulnav li:nth-of-type(2)").hover(function(){
    $(this).children('.header_newhouse').css('display','block');
},function () {
    $(this).children('.header_newhouse').css('display','none');
})