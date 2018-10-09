/**
 * Created by liuha on 2018/9/12.
 */
$('.title_navbox>ul>li').click(function () {
    $('.title_navbox>ul>li a').removeClass('act');
    $(this).children('a').addClass('act');
})
$('.title_navbox>ul>li').hover(function () {
    $(this).children('a').css({'color':'#FF8400','border-bottom':'3px solid #FF8400'});
},function () {
    //寻找li下面含有act的a标签，找寻它的父亲节点的其余兄弟节点下面的孩子a标签，并更改其CSS样式
    $('.title_navbox>ul>li a.act').parent().siblings().children('a').css({'color':'#333333','border-bottom':'3px solid transparent'});
})
function chang_img(a){
    var this_img = $('.content_inforr_spanli a').eq(a).css('background');
    this_img = this_img.split('")')[0];
    this_img = this_img.split('("')[1];
    $('.content_inforr_img img').attr('src',this_img);
}
var a;
$('.content_inforr_spanli a').mouseenter(function(){
    $(this).addClass('check').siblings().removeClass('check');
    var this_img = $(this).css('background');
    this_img = this_img.split('")')[0];
    this_img = this_img.split('("')[1];
    $('.content_inforr_img img').attr('src',this_img);
    /* alert(this_img);*/
    a = $(this).index();
})

$('.b_prev').click(function(){
    a--;
    if(a<0){a=0;}
    $('.content_inforr_spanli a').eq(a).addClass('check').siblings().removeClass('check');
    console.log(a);
    chang_img(a);
})
$('.b_next').click(function(){
    a++;
    if(a>$('.content_inforr_spanli a').length-1){a=$('.content_inforr_spanli a').length-1;}
    $('.content_inforr_spanli a').eq(a).addClass('check').siblings().removeClass('check');
    console.log(a);
    chang_img(a);
})
var marker, map = new AMap.Map("map", {
    resizeEnable: true,
    center: [100.253211,38.177112],
    zoom: 15,
    scrollWheel:false,
});
function aaa(){
    $.ajax({
        type: "POST",
        url: "https://restapi.amap.com/v3/place/around?key=4152276afeda8d0aa6a0ba088c1f0c62&location=100.253211,38.177112&keywords=交通&types=&radius=500&offset=6&page=1&extensions=all",
        async: false,
        dataType:"json",
        success: function(data) {
            //清空resText里面的所有内容
            $.each(data, function (commentIndex, comment) {
                console.log(comment['pois']);
            })
        }}
    )}




aaa();
