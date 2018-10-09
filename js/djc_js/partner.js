//地图
var map = new AMap.Map('container', {
    resizeEnable: true,
    center:[116.480983, 39.989628],
    zoom:11,
    scrollWheel:false
});
AMap.plugin('AMap.ToolBar',function(){
    var toolbar = new AMap.ToolBar();
    map.addControl(toolbar)
})
$(function(){
	$(".input .input1 .hope").focus(function(){
		$(".partner-main9 .input ul").css("display","block");
		$(".input .input1 img").attr("src","djc_img/arr_up.png");

	});
	$(".input .input1 .hope").blur(function(){
		$(".partner-main9 .input ul").css("display","none");
		$(".input .input1 img").attr("src","djc_img/arr.png");
	});
});
$(window).scroll(function(){
	if($('.footer').offset().top >= $('.partner-main9').offset().top-200){
		$('.footer').stop().fadeOut(100);
	}
	else{
		$('.footer').stop().fadeIn(100);
	}
});
$('.footer_input .Type').focus(function(){
	$('.footer_input ul').css("display","block");
	$('.two_footer').css("margin-top","105px");
});
$('.footer_input .Type').blur(function(){
	$('.footer_input ul').css("display","none");
	$('.two_footer').css("margin-top","20px");
});
//申请提交
$('.partner-main9 .button,.footer_input button').click(function(){
	var names=$('.name');
	var phones=$('.phone');
	var citys=$('.city');
	var types=$('.Type');
	if('names==""||phones==""||citys==""||types==""'){
		alert('请填写信息');
	}
});
