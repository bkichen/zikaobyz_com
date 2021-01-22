/* 加载第一界面 */
function page1(){
		/* 加载第一页面样式 */
		$(".firstactive").addClass("fadeInDownT");
		$(".firstactive").addClass("animated");
		$(".addactive").addClass("animatedfirst");
		$(".addactive").addClass("fadefirst");
		//清除第二页面
		$(".secondbtn").removeClass("animated");
		$(".secondbtn").removeClass("fadeIn2");
		$(".secondbtn2").removeClass("animated");
		$(".secondbtn2").removeClass("fadeIn2");
		$(".btn1").removeClass("s01");
		$(".btn2").removeClass("s02");
		$(".btn3").removeClass("s03");
		$(".btn4").removeClass("s04");
		$(".btn5").removeClass("s05");
		$(".btn6").removeClass("s06");
		//清除第三页面样式
		$(".thirdactive").removeClass("animated");
		$(".thirdactive").removeClass("fadeIn2");
		$(".thirdbtn1").removeClass("s01");
		$(".thirdbtn2").removeClass("s02");
		$(".thirdbtn3").removeClass("s03");
		$(".thirdbtn4").removeClass("s04");
		//清楚第四页面样式
		$(".addactive4").removeClass("animatedfouth");
		$(".addactive4").removeClass("fadefouth");
	}
/* 加载第二界面 */
function page2(){
		/* 加载第二页面样式 */
		$(".secondbtn").addClass("animated");
		$(".secondbtn").addClass("fadeIn2");
		$(".secondbtn2").addClass("animated");
		$(".secondbtn2").addClass("fadeIn2");
		$(".btn1").addClass("s01");
		$(".btn2").addClass("s02");
		$(".btn3").addClass("s03");
		$(".btn4").addClass("s04");
		$(".btn5").addClass("s05");
		$(".btn6").addClass("s06");
		
		/* 清除一三页面样式 */
		//清除第一页面样式
		$(".firstactive").removeClass("fadeInDownT");
		$(".firstactive").removeClass("animated");
		$(".addactive").removeClass("animatedfirst");
		$(".addactive").removeClass("fadefirst");
		//清除第三页面样式
		$(".thirdactive").removeClass("animated");
		$(".thirdactive").removeClass("fadeIn2");
		$(".thirdbtn1").removeClass("s01");
		$(".thirdbtn2").removeClass("s02");
		$(".thirdbtn3").removeClass("s03");
		$(".thirdbtn4").removeClass("s04");
			//清楚第四页面样式
		$(".addactive4").removeClass("animatedfouth");
		$(".addactive4").removeClass("fadefouth");
		
	}
/* 加载第三界面 */
function page3(){
		/* 加载第三页面样式 */
		$(".thirdactive").addClass("animated");
		$(".thirdactive").addClass("fadeIn2");
		$(".thirdbtn1").addClass("s01");
		$(".thirdbtn2").addClass("s02");
		$(".thirdbtn3").addClass("s03");
		$(".thirdbtn4").addClass("s04");
		
		/* 清除一二页面样式 */
		//清除第一页面
		$(".firstactive").removeClass("fadeInDownT");
		$(".firstactive").removeClass("animated");
			$(".addactive").removeClass("animatedfirst");
		$(".addactive").removeClass("fadefirst");
		//清除第二页面
		$(".secondbtn").removeClass("animated");
		$(".secondbtn").removeClass("fadeIn2");
		$(".secondbtn2").removeClass("animated");
		$(".secondbtn2").removeClass("fadeIn2");
		$(".btn1").removeClass("s01");
		$(".btn2").removeClass("s02");
		$(".btn3").removeClass("s03");
		$(".btn4").removeClass("s04");
		$(".btn5").removeClass("s05");
		$(".btn6").removeClass("s06");
			//清楚第四页面样式
		$(".addactive4").removeClass("animatedfouth");
		$(".addactive4").removeClass("fadefouth");
	}
/* 加载第四界面 */
function page4(){
		//加载第四页面样式
		$(".addactive4").addClass("animatedfouth");
		$(".addactive4").addClass("fadefouth");
		/* 清除一二三页面样式 */
		
		//清除第一页面
		$(".firstactive").removeClass("fadeInDownT");
		$(".firstactive").removeClass("animated");
		$(".addactive").removeClass("animatedfirst");
		$(".addactive").removeClass("fadefirst");
		//清除第二页面
		$(".secondbtn").removeClass("animated");
		$(".secondbtn").removeClass("fadeIn2");
		$(".secondbtn2").removeClass("animated");
		$(".secondbtn2").removeClass("fadeIn2");
		$(".btn1").removeClass("s01");
		$(".btn2").removeClass("s02");
		$(".btn3").removeClass("s03");
		$(".btn4").removeClass("s04");
		$(".btn5").removeClass("s05");
		$(".btn6").removeClass("s06");
		//清除第三页面样式
		$(".thirdactive").removeClass("animated");
		$(".thirdactive").removeClass("fadeIn2");
		$(".thirdbtn1").removeClass("s01");
		$(".thirdbtn2").removeClass("s02");
		$(".thirdbtn3").removeClass("s03");
		$(".thirdbtn4").removeClass("s04");
	}
$(function($) {

	$.fn.screen = function(options) {
		var $this = this; //第一个div
		var set = $.extend({
			before: [],
			after: []
		}, options);

		$this.css({
			overflow: 'hidden',
			position: 'fixed',
			width: '100%',
			height: '100%',
			left: '0',
			top: '0'
		});
		var ch = $this.children('div');
		$this.empty();
		var secondDiv = $('<div></div>').css({
			position: "relative",
			left: '0',
			top: '0',
			width: '100%',
			height: '100%',
			"margin-top": '0',
			"margin-bottom": '0',
			"margin-left": "auto",
			"margin-right": "auto",
			visibility: "visible"
		});
		secondDiv.appendTo($this);
		ch.css({
			height: '100%',
			width: '100%'
		}).appendTo(secondDiv);
		var navbarUl = $("<ul class='rightul'></ul>").css({
			position: 'absolute',
			top: '50%',
			"z-index": "1000",
			right: "2%"
		});
		ch.each(function(i) {
			var barele = $("<li></li>").attr("index", i).css({
				border: "0.03rem solid #2876B3",
				"border-radius": "50%",
				width: "0.14rem",
				height: "0.14rem",
				"list-style": "none",
				cursor: "pointer",
				"margin-bottom": "0.06rem",
				"background-color": (i == 0 ? "red" : "transparent")
			});
			barele.appendTo(navbarUl);
		});
		//console.log(navbarUl.height()); //打印0
		//先将其添加到HTML文档流对象中，再设置其top位置，不然其位置计算会忽略掉其自身高度。
		navbarUl.appendTo($this);
		console.log(navbarUl.height()); //打印高度
		navbarUl.css({
			"margin-top": -parseInt(navbarUl.height()) / 200 + "rem"
		});
		//兼容火狐
		var wheelName = navigator.userAgent.indexOf("Firefox") > 0 ? "DOMMouseScroll" : "mousewheel";
		$this.bind(wheelName, function() {
			var event = window.event || arguments.callee.caller.arguments[0];
			//console.log(event);
			var contentV = 0;
			//统一线下滚动为负数
			if (event.wheelDelta) {
				contentV = Math.floor(event.wheelDelta / 120) * 60;

			} else if (event.detail) {
				contentV = -Math.floor(event.detail / 3) * 60;
			}
			//console.log(contentV);
			if (contentV < 0) {
				//向下滚动为1，向上滚动为-1
				console.log("下滚动作");
				slide(1);
			} else {
				console.log("上滚动作");
				slide(-1);
			}
		});
		var currentPage = 0; //当前的页数
		if(currentPage==0){
			page1();
		}
		var lg = secondDiv.children("div").length;
		//var sht=_i.children('div').outerHeight();//得到屏内容的高度。也就是每次要切屏时div向上向下移动的量。
		var flag = true;

		//n是1就向下切屏，n是-1就向上切屏。
		function slide(n) {
			if (!flag) {
				return;
			}
			flag = false;
			if (n > 0 && currentPage < (lg - 1)) {
				console.log("执行下滚");
				if (set.before[currentPage]) {
					set.before[currentPage]();
				}
				currentPage++;
				if(currentPage==1){//第二个页面
					page2();
				}
				if(currentPage==2){//第三个页面
					page3();
				}
				if(currentPage==3){//第四个页面
					page4();
				}
				animateDown(currentPage);

			} else {
				if (n < 0 && currentPage > 0) {
					console.log("执行上滚");
					if (set.before[currentPage]) {
						set.before[currentPage]();
					}
					currentPage--;
					if(currentPage==0){//第一页面
						page1()
					}
					if(currentPage==1){
						page2();
					}
					if(currentPage==2){//第三页面
						page3();
					}
					if(currentPage==3){//第四页面
						page4();
					}
					animateDown(currentPage);
				} else {
					flag = true;
				}
			}
		}

		function animateDown(c) {
			secondDiv.animate({
				top: -c * 100 + '%'
			}, 'slow', function() {
				navbarUl.find('li').css({
					background: 'transparent'
				});
				navbarUl.find('li').eq(c).css("background", "red");
				if (set.after[c]) {
					set.after[c]();
				}
				flag = true;
			});
		}
		//初始化容器高度
		ch.height($(window).height());
		//窗口改变，容器高度也改变
		$(window).resize(function() {
			ch.height($(window).height());
		});

	 	navbarUl.children('li').on('click', function() {
			var $index = $(this).index();
			if($index==0){
				page1();
			}
			if($index==1){
				page2();
			}
			if($index==2){
				page3();
			}
			if($index==3){
				page4();
			}
			animateDown($index);
			currentPage = $index;
		});
	}
}(jQuery));

$(function () {
		$('#scrolls').screen();
	/* 第一页点击效果 */
	$(".firstbtn1").click(function(){
		/* 改背景色 */
		$(".firstbtn2,.firstbtn3").removeClass("bgred");
		$(".firstbtn2,.firstbtn3").removeClass("fontwiter");
		$(".firstbtn2,.firstbtn3").addClass("bgwiter");
		$(".firstbtn2,.firstbtn3").addClass("fontblack");
		$(this).removeClass("bgwiter");
		$(this).removeClass("fontblack");
		$(this).addClass("bgred");
		$(this).addClass("fontwiter");
		/* 改图片 */
		//$(".firstimg").attr("src","img/QRcode.png");
	});
	$(".firstbtn2").click(function(){
		/* 改背景色 */
		$(".firstbtn1,.firstbtn3").removeClass("bgred");
		$(".firstbtn1,.firstbtn3").removeClass("fontwiter");
		$(".firstbtn1,.firstbtn3").addClass("bgwiter");
		$(".firstbtn1,.firstbtn3").addClass("fontblack");
		$(this).removeClass("bgwiter");
		$(this).removeClass("fontblack");
		$(this).addClass("bgred");
		$(this).addClass("fontwiter");
		/* 改图片 */
		//$(".firstimg").attr("src","img/android.png");
	});
	$(".firstbtn3").click(function(){
		/* 改背景色 */
		$(".firstbtn1,.firstbtn2").removeClass("bgred");
		$(".firstbtn1,.firstbtn2").removeClass("fontwiter");
		$(".firstbtn1,.firstbtn2").addClass("bgwiter");
		$(".firstbtn1,.firstbtn2").addClass("fontblack");
		$(this).removeClass("bgwiter");
		$(this).removeClass("fontblack");
		$(this).addClass("bgred");
		$(this).addClass("fontwiter");
		/* 改图片 */
		//$(".firstimg").attr("src","img/apple.png");
	});

	/* 第二页点击效果 */
	$(".btn1").click(function(){
		/* 改背景色 */
		$(".btn2,.btn3,.btn4,.btn5,.btn6").removeClass("bgred");
		$(".btn2,.btn3,.btn4,.btn5,.btn6").removeClass("fontsize20");
		$(".btn2,.btn3,.btn4,.btn5,.btn6").removeClass("shadow");
		$(".btn2,.btn3,.btn4,.btn5,.btn6").addClass("bgblue");
		$(".btn2,.btn3,.btn4,.btn5,.btn6").addClass("fontsize16");
		$(this).removeClass("bgblue");
		$(this).removeClass("fontsize16");
		$(this).addClass("bgred");
		$(this).addClass("fontsize20");
		$(this).addClass("shadow");
		/* 改图片 */
		$(".secondimg").attr("src","img/imgs1.png");
	});
	$(".btn2").click(function(){
		/* 改背景色 */
		$(".btn1,.btn3,.btn4,.btn5,.btn6").removeClass("bgred");
		$(".btn1,.btn3,.btn4,.btn5,.btn6").removeClass("fontsize20");
		$(".btn1,.btn3,.btn4,.btn5,.btn6").removeClass("shadow");
		$(".btn1,.btn3,.btn4,.btn5,.btn6").addClass("bgblue");
		$(".btn1,.btn3,.btn4,.btn5,.btn6").addClass("fontsize16");
		$(this).removeClass("bgblue");
		$(this).removeClass("fontsize16");
		$(this).addClass("bgred");
		$(this).addClass("fontsize20");
		$(this).addClass("shadow");
		/* 改图片 */
		$(".secondimg").attr("src","img/imgs2.jpg");
	});
	$(".btn3").click(function(){
		/* 改背景色 */
		$(".btn2,.btn1,.btn4,.btn5,.btn6").removeClass("bgred");
		$(".btn2,.btn1,.btn4,.btn5,.btn6").removeClass("fontsize20");
		$(".btn2,.btn1,.btn4,.btn5,.btn6").removeClass("shadow");
		$(".btn2,.btn1,.btn4,.btn5,.btn6").addClass("bgblue");
		$(".btn2,.btn1,.btn4,.btn5,.btn6").addClass("fontsize16");
		$(this).removeClass("bgblue");
		$(this).removeClass("fontsize16");
		$(this).addClass("bgred");
		$(this).addClass("fontsize20");
		$(this).addClass("shadow");
		/* 改图片 */
		$(".secondimg").attr("src","img/imgs3.jpg");
	});
	$(".btn4").click(function(){
		/* 改背景色 */
		$(".btn2,.btn3,.btn1,.btn5,.btn6").removeClass("bgred");
		$(".btn2,.btn3,.btn1,.btn5,.btn6").removeClass("fontsize20");
		$(".btn2,.btn3,.btn1,.btn5,.btn6").removeClass("shadow");
		$(".btn2,.btn3,.btn1,.btn5,.btn6").addClass("bgblue");
		$(".btn2,.btn3,.btn1,.btn5,.btn6").addClass("fontsize16");
		$(this).removeClass("bgblue");
		$(this).removeClass("fontsize16");
		$(this).addClass("bgred");
		$(this).addClass("fontsize20");
		$(this).addClass("shadow");
		/* 改图片 */
		$(".secondimg").attr("src","img/imgs4.jpg");
	});
	$(".btn5").click(function(){
		/* 改背景色 */
		$(".btn2,.btn3,.btn4,.btn1,.btn6").removeClass("bgred");
		$(".btn2,.btn3,.btn4,.btn1,.btn6").removeClass("fontsize20");
		$(".btn2,.btn3,.btn4,.btn1,.btn6").removeClass("shadow");
		$(".btn2,.btn3,.btn4,.btn1,.btn6").addClass("bgblue");
		$(".btn2,.btn3,.btn4,.btn1,.btn6").addClass("fontsize16");
		$(this).removeClass("bgblue");
		$(this).removeClass("fontsize16");
		$(this).addClass("bgred");
		$(this).addClass("fontsize20");
		$(this).addClass("shadow");
		/* 改图片 */
		$(".secondimg").attr("src","img/imgs5.jpg");
	});
	$(".btn6").click(function(){
		/* 改背景色 */
		$(".btn2,.btn3,.btn4,.btn5,.btn1").removeClass("bgred");
		$(".btn2,.btn3,.btn4,.btn5,.btn1").removeClass("fontsize20");
		$(".btn2,.btn3,.btn4,.btn5,.btn1").removeClass("shadow");
		$(".btn2,.btn3,.btn4,.btn5,.btn1").addClass("bgblue");
		$(".btn2,.btn3,.btn4,.btn5,.btn1").addClass("fontsize16");
		$(this).removeClass("bgblue");
		$(this).removeClass("fontsize16");
		$(this).addClass("bgred");
		$(this).addClass("fontsize20");
		$(this).addClass("shadow");
		/* 改图片 */
		$(".secondimg").attr("src","img/imgs6.jpg");
	});
	/* 第三页点击效果 */
	$(".thirdbtn1").click(function(){
		/* 改背景色 */
		$(".thirdbtn2,.thirdbtn3,.thirdbtn4").removeClass("bgskyblue");
		$(".thirdbtn2,.thirdbtn3,.thirdbtn4").removeClass("fontwiter");
		$(".thirdbtn2,.thirdbtn3,.thirdbtn4").removeClass("shadow1");
		$(this).addClass("bgskyblue");
		$(this).addClass("fontwiter");
		$(this).addClass("shadow1");
		/* 改图片 */
		$(".thirdimg").attr("src","img/imgs4.jpg");
	})
	$(".thirdbtn2").click(function(){
		/* 改背景色 */
		$(".thirdbtn1,.thirdbtn3,.thirdbtn4").removeClass("bgskyblue");
		$(".thirdbtn1,.thirdbtn3,.thirdbtn4").removeClass("fontwiter");
		$(".thirdbtn1,.thirdbtn3,.thirdbtn4").removeClass("shadow1");
		$(this).addClass("bgskyblue");
		$(this).addClass("fontwiter");
		$(this).addClass("shadow1");
		/* 改图片 */
		$(".thirdimg").attr("src","img/imgs5.jpg");
	})
	$(".thirdbtn3").click(function(){
		/* 改背景色 */
		$(".thirdbtn1,.thirdbtn2,.thirdbtn4").removeClass("bgskyblue");
		$(".thirdbtn1,.thirdbtn2,.thirdbtn4").removeClass("fontwiter");
		$(".thirdbtn1,.thirdbtn2,.thirdbtn4").removeClass("shadow1");
		$(this).addClass("bgskyblue");
		$(this).addClass("fontwiter");
		$(this).addClass("shadow1");
		/* 改图片 */
		$(".thirdimg").attr("src","img/imgs5.jpg");
	})
	$(".thirdbtn4").click(function(){
		/* 改背景色 */
		$(".thirdbtn1,.thirdbtn3,.thirdbtn2").removeClass("bgskyblue");
		$(".thirdbtn1,.thirdbtn3,.thirdbtn2").removeClass("fontwiter");
		$(".thirdbtn1,.thirdbtn3,.thirdbtn2").removeClass("shadow1");
		$(this).addClass("bgskyblue");
		$(this).addClass("fontwiter");
		$(this).addClass("shadow1");
		/* 改图片 */
		$(".thirdimg").attr("src","img/imgs5.jpg");
	})
	
	/* 第四页效果 */
	$(".fouthbtn1").click(function(){
		/* 改背景色 */
		$(".fouthbtn2,.fouthbtn3").removeClass("bgred");
		$(".fouthbtn2,.fouthbtn3").removeClass("fontwiter");
		$(".fouthbtn2,.fouthbtn3").addClass("bgwiter");
		$(".fouthbtn2,.fouthbtn3").addClass("fontblack");
		$(this).removeClass("bgwiter");
		$(this).removeClass("fontblack");
		$(this).addClass("bgred");
		$(this).addClass("fontwiter");
		/* 改图片 */
	});
	$(".fouthbtn2").click(function(){
		/* 改背景色 */
		$(".fouthbtn1,.fouthbtn3").removeClass("bgred");
		$(".fouthbtn1,.fouthbtn3").removeClass("fontwiter");
		$(".fouthbtn1,.fouthbtn3").addClass("bgwiter");
		$(".fouthbtn1,.fouthbtn3").addClass("fontblack");
		$(this).removeClass("bgwiter");
		$(this).removeClass("fontblack");
		$(this).addClass("bgred");
		$(this).addClass("fontwiter");
		/* 改图片 */
	});
	$(".fouthbtn3").click(function(){
		/* 改背景色 */
		$(".fouthbtn1,.fouthbtn2").removeClass("bgred");
		$(".fouthbtn1,.fouthbtn2").removeClass("fontwiter");
		$(".fouthbtn1,.fouthbtn2").addClass("bgwiter");
		$(".fouthbtn1,.fouthbtn2").addClass("fontblack");
		$(this).removeClass("bgwiter");
		$(this).removeClass("fontblack");
		$(this).addClass("bgred");
		$(this).addClass("fontwiter");
		/* 改图片 */
	});
});

