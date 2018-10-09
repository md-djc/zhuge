//区域、地铁
$('.main-middle1>span:nth-of-type(2)').click(function(){
	$('#main-middle22').css('display','block');
	$('#main-middle21').css('display','none');
	$(this).css({'color':'#FF8400','border-bottom':'4px solid #FF8400'});
	$(this).siblings().css({'color':'#000000','border-bottom':'none'});
});
$('.main-middle1>span:nth-of-type(1)').click(function(){
	$('#main-middle21').css('display','block');
	$('#main-middle22').css('display','none');
	$(this).css({'color':'#FF8400','border-bottom':'4px solid #FF8400'});
	$(this).siblings().css({'color':'#000000','border-bottom':'none'});
});
//更多选项
$('.main-middle9>p').click(function(){
	if($(this).html()=='更多选项'){
		$('.main-middle7,.main-middle8').css('display','block');
		$(this).html('收起选项');
		$(this).siblings().hide();
	}
	else{
		$('.main-middle7,.main-middle8').css('display','none');
		$(this).html('更多选项');
		$(this).siblings().show();
	}
});
//经济公司，品牌公寓
$('.main-middle6>a:nth-of-type(2)').click(function(){
	$('.com-none').css('display','block');
	$('.con-none').css('display','none');
});
$('.main-middle6>a:nth-of-type(3)').click(function(){
	$('.con-none').css('display','block');
	$('.com-none').css('display','none');
});
$('.com-none span').click(function(){
	$(this).parent().parent().css('display','none');
})
$('.con-none span').click(function(){
	$(this).parent().parent().css('display','none');
})
//切换租房信息
$('.bosom a').click(function(){
 	var i = $(this).index();
    $(this).addClass('current').siblings().removeClass('current');
    $('.bottom ul').eq(i).show().siblings().hide();
});
//切换租房信息的提示
$('.bosom a').hover(function(){
	var i = $(this).index();
	if(i>0)
	$('.renting .copy').eq(i).css('display','block');
},function(){
	var i = $(this).index();
	$('.renting .copy').eq(i).css('display','none');
});
//标题
$('.bottom .pic a').hover(function(){
	$(this).css('color','#FF8400');
},function(){
	$(this).css('color','#333333');
});
//返回顶部
$(window).scroll(function(){
	if($(window).scrollTop()){
		$('button').fadeIn(500);
	}else{
		$('button').fadeOut();
	}
});

$('button').click(function(){
	$('html,body').animate({'scrollTop':'0px'},1000);
});

//克隆
for(var i = 0;i<pro.length;i++){
	console.log(pro[i].pic_a[1]);
	var oli = $('.bottom ul li').eq(0).clone(true);
	oli.children('a').children('img').attr('src',pro[i].imgSrc);
	oli.children('.title').children('.pic').children('a').html(pro[i].pictitle);
	oli.children('.title').children('.pic-describe').children('span').children('a').eq(0).html(pro[i].pic_a[0]);
	oli.children('.title').children('.pic-describe').children('span').children('a').eq(1).html(pro[i].pic_a[1]);
	oli.children('.title').children('.pic-describe').children('span').children('a').eq(2).html(pro[i].pic_a[2]);
	oli.children('.title').children('.pic-describe').children('span').eq(1).html(pro[i].pic_b);
	oli.children('.title').children('.pic-describe').children('span').eq(3).html(pro[i].pic_c);
	oli.children('.title').children('.pic-describe').children('span').eq(4).html(pro[i].pic_d);
	oli.children('.title').children('.pic-describe').children('span.right_span').children('b').html(pro[i].pic_e);
	$('.bottom ul').append(oli);
}

//选中
$('.none i').click(function(){
	$(this).addClass('hover');
	$(this).siblings().removeClass('hover');
});

