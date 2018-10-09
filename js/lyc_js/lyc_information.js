$(function() {
	// 轮播
	bannerRotate.bannerInit();
});

// banner rotating
var bannerRotate = {
	_time: 10000,
	_fade: 200,
	_i: 0,
	_interval: null,
	_navId: "#mb-inav",
	_navBox: "#mb-ibox",
	_navTxt: "#mb-itxt",
	bannerShow: function() {
		$(this._navId).find("li .item-li").removeClass("cur");
		$(this._navId).find("li:eq(" + this._i + ")").find(".item-li").addClass("cur");

		//$(this._navBox).find("a").hide();
		$(this._navBox).find("a:eq(" + this._i + ")").fadeIn(this._fade);

		$(this._navBox).find("a").removeClass("move");
		$(this._navBox).find("a[class='cur']").removeClass("cur").addClass("move");

		$(this._navBox).find("a:eq(" + this._i + ")").removeClass("move").addClass("cur");
		$(this._navTxt).find(".slide-itxt").hide();
		$(this._navTxt).find(".slide-itxt:eq(" + this._i + ")").fadeIn(this._fade);
	},
	bannerStart: function() {
		var _this = this;
		_this._interval = setInterval(function() {
			if(_this._i >= 3) {
				_this._i = 0;
			} else {
				_this._i++;
			}
			_this.bannerShow();
		}, _this._time);
	},
	bannerInit: function() {
		var _this = this;
		_this.bannerStart();

		$(_this._navId).find("li .item-li").bind("click", function() {
			if($(this).hasClass("cur")) {
				return;
			}
			clearInterval(_this._interval);
			_this._i = $(this).parent().index();
			_this.bannerShow();
			_this.bannerStart();
		});
	}
};

var t = n = 0,
	count;
$(document).ready(function() {
	count = $("#banner_list a").length;
	$("#banner_list a:not(:first-child)").hide();
	$("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
	$("#banner_info").click(function() {
		window.open($("#banner_list a:first-child").attr('href'), "_blank")
	});
	$("#banner li").click(function() {
		var i = $(this).text() - 1; //获取Li元素内的值，即1，2，3，4
		n = i;
		if(i >= count) return;
		$("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
		$("#banner_info").unbind().click(function() {
			window.open($("#banner_list a").eq(i).attr('href'), "_blank")
		})
		$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
		document.getElementById("banner").style.background = "";
		$(this).toggleClass("on");
		$(this).siblings().removeAttr("class");
	});

	$("#banner li").click(function() {
		var $index = $(this).index();
		$(".box1:eq(" + $index + ")").show();
		$(".box1:eq(" + $index + ")").siblings(".box1").hide();
	})

	$("#banner li:first-child(1)").click(function() {
		$(".box1").css("display", "block");
	});
})
t = setInterval("showAuto()", 4000);
$("#banner").hover(function() {
	clearInterval(t)
}, function() {
	t = setInterval("showAuto()", 4000);
});

function showAuto() {
	n = n >= (count - 1) ? 0 : ++n;
	$("#banner li").eq(n).trigger('click');
}