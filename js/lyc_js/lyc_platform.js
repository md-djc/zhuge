$(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() > $(window).height()) {
			$('.backgo').fadeIn(1000);
		} else {
			$('.backgo').fadeOut();
		}

	})
	$('.backgo').click(function() {
		$('html,body').animate({
			'scrollTop': '0px'
		}, 500);

	})
})
$(function() {
	$(".start").click(function() {
		$(".use").css("display", "block");
		$('.close').css('display', 'block');
	})
	$("span").click(function() {
		$(".use").hide();
		$('.close').css('display', 'none');
	})
})
$(function() {
	$(".start1").click(function() {
		$(".use").css("display", "block");
	})
	$("span").click(function() {
		$(".use").slideUp();
	})
})

$(function() {
	$(".Tone").mouseover(function() {
		$(".Tone").children('.start1').css("display", "block");
		$('.Tone').css({
			"margin-top": "-15px",
			'box-shadow': '1px 3px 15px 1px #888888'
		});

	})
	$(".Tone").mouseout(function() {
		$(".Tone").children('.start1').css("display", "none");
		$('.Tone').css({
			"margin-top": "0px",
			'box-shadow': '0px 0px 0px 0px #888888'
		});
	})
})
$(function() {
	$(".Ttwo").mouseover(function() {
		$(".Ttwo").children('.start1').css("display", "block");
		$('.Ttwo').css({
			"margin-top": "-15px",
			'box-shadow': '1px 3px 15px 1px #888888'
		});
		console.log(1)

	})
	$(".Ttwo").mouseout(function() {
		$(".Ttwo").children('.start1').css("display", "none");
		$('.Ttwo').css({
			"margin-top": "0px",
			'box-shadow': '0px 0px 0px 0px #888888'
		});

	})
})
$(function() {
	$(".Tthree").mouseover(function() {
		$(".Tthree").children('.start1').css("display", "block");
		$('.Tthree').css({
			"margin-top": "-15px",
			'box-shadow': '1px 3px 15px 1px #888888'
		});

	})
	$(".Tthree").mouseout(function() {
		$(".Tthree").children('.start1').css("display", "none");
		$('.Tthree').css({
			"margin-top": "0px",
			'box-shadow': '0px 0px 0px 0px #888888'
		});
	})
})
$(function() {
	$(".menu li").click(function() {
		//通过 .index()方法获取元素下标，从0开始，赋值给某个变量
		var _index = $(this).index();
		//让内容框的第 _index 个显示出来，其他的被隐藏
		$(".tab-box>div").eq(_index).show().siblings().hide();
		//改变选中时候的选项框的样式，移除其他几个选项的样式
		$(this).addClass("change").siblings().removeClass("change")

	});
});

$(function() {
	var num = 0;
	$('.rightt').click(function(event) {

		num++;
		if(num > 3) {
			num = 0;
			$('ul').css({
				'left': -num * 1200 + 'px'
			});
			// css不带过渡效果
			num = 1;
		}
		if(num == 3) {
			$('ol li').eq(0).addClass('current')
			$('ol li').eq(0).siblings().removeClass('current')
		}
		$('.first').animate({
			'left': -num * 1200 + 'px'
		}, 500);
		$('ol li').eq(num).addClass('current')
		$('ol li').eq(num).siblings().removeClass('current')

	});
	$('.leftt').click(function(event) {

		num++;
		if(num > 3) {
			num = 0;
			$('ul').css({
				'left': -num * 1200 + 'px'
			});
			// css不带过渡效果
			num = 1;
		}
		if(num == 3) {
			$('ol li').eq(0).addClass('current')
			$('ol li').eq(0).siblings().removeClass('current')
		}
		$('.first').animate({
			'left': -num * 1200 + 'px'
		}, 500);
		$('ol li').eq(num).addClass('current')
		$('ol li').eq(num).siblings().removeClass('current')

	});
})