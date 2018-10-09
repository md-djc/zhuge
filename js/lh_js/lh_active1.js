
var background_pointer =document.getElementsByClassName("background_Show")[0];
var left_pointer = document.getElementsByClassName("left_prevBox");
var right_pointer = document.getElementsByClassName("right_nextBox");
var a = background_pointer.className.split(" ")[0];
var now_show = document.getElementsByClassName(a)[0];
var now_span = document.getElementsByClassName("bottom_placeBox")[0].getElementsByTagName("span");
var now_next;

if(a=="search_Background1"){
	now_next = document.getElementsByClassName("search_Background2")[0];
}
else{
	now_next = document.getElementsByClassName("search_Background1")[0];
}

function change_background1(){
	now_next.classList.add("background_Show");
	now_show.classList.remove("background_Show");
	now_span[0].classList.remove("bottom_placeShow");
	now_span[1].classList.add("bottom_placeShow");

}
function change_background2(){
	now_next.classList.remove("background_Show");
	now_show.classList.add("background_Show");
	now_span[0].classList.add("bottom_placeShow");
	now_span[1].classList.remove("bottom_placeShow");
}
left_pointer[0].onclick = function(){
	if(a=="search_Background1"){
		a="search_Background2";
		change_background1();
	}
	else{
		a="search_Background1";
		change_background2();
	}
}
right_pointer[0].onclick = function(){
	if(a=="search_Background1"){
		a="search_Background2";
		change_background1();
	}
	else{
		a="search_Background1";
		change_background2();
	}
}

setInterval(right_pointer[0].onclick, 5000);


$(".input_Nav>ul>li").click(function(){
	remove_navClass();
	$(this).addClass("active_pointer");
})
var i;
function remove_navClass(){
	$(".input_Nav>ul>li").removeClass("active_pointer");
}

function now_top(){
	for(var i=0; i<$(".info_top li").length;i++){
		if($(".info_top li")[i].className == "hover_this"){
			$(".info_top li").removeClass("hover_this");
			$(".info_bottom>li").removeClass("info_bottomNow");
			if(i>=$(".info_top li").length-1){
				i=-1;
			}
			$(".info_top li").eq(i+1).addClass("hover_this");
			$(".info_bottom>li").eq(i+1).addClass("info_bottomNow");
			return i;
			/*$(".info_top li")[i+1].setAttribute("class","now");*/
		}

	}
}
setInterval(function(){
	now_top();
}, 5000);

$(".info_top li").hover(function(){
	var b = $(this).index();
		$(".info_bottom>li").eq(b).siblings().removeClass("info_bottomNow");
		$(".info_bottom>li").eq(b).addClass("info_bottomNow");
		$(".info_top li").removeClass("hover_this");
		$(".info_top li").eq(b).addClass("hover_this");

})

var num=0;
var timer;
function gogo(){
	timer=setInterval(function(){
		num++;
		if(num>3)
		{
			num=0;
			$('.focus_houseimg').css({'left':-580*num+'px'});
			num=1
		}
		$('.focus_houseimg').animate({'left':-580*num+'px'},2000)
	},5000)
}
gogo()
$('.focus_houseimg').hover(function() {
	clearInterval(timer)
}, function() {
	gogo()
});
$('.focus_housemainrightb').niceScroll({
	cursorcolor: "#ff8400",//#CC0071 光标颜色
	cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
	touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
	cursorwidth: "1px", //像素光标的宽度
	cursorborder: "0", // 游标边框css定义
	cursorborderradius: "5px",//以像素为光标边界半径
	autohidemode: false //是否隐藏滚动条
});
$(window).scroll(function(){
	if($(window).scrollTop()>=($(window).width()/2)){
        $(".btn_to_top").fadeIn(600);
	}
    if($(window).scrollTop()<($(window).width()/2)){
        $(".btn_to_top").fadeOut(600);
    }
})
$(".btn_to_top").click(function(){
		$('html,body').animate({'scrollTop':'0px'},600);
})
