window.addEventListener('load',function(){	
	//判断是否为火狐浏览器
			var isFirefox = typeof document.body.style.MozUserSelect != 'undefined',
				now = 0,
				active = true,
				all = document.getElementsByClassName('allUl')[0],
				obj = $('.allUl>li'),
				cri = document.getElementsByClassName('side')[0],
				on=cri.getElementsByTagName('li'),
				bao=cri.getElementsByTagName('div'),
	      head=document.getElementsByClassName('header')[0];
	      alert($('.allUl>li').length)
	//绑定滚轮事件
			window.addEventListener(isFirefox ? 'DOMMouseScroll' : "mousewheel", fn, false);

			function fn(e) {    //滚轮触发函数
				e = e || event;
				//调整滚轮返回值兼容
				a = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail % 3 == 0 ? e.detail / 3 : e.detail);
				if (active) {
					active = false;
					setTimeout(one, 500)
					two(a)
				}
			}

			function one() {   //滚轮开关
				active = true;
			}

			function two(a) {  //加载函数
				now += a
				if (now < -6) {
					now = -6
//					alert(1)
				} else if (now > 0) {
					now = 0
				}
//				else if(now == 0){
//					head.style.transition='0.5s'
//					head.style.background='#7D7D7D';
//				}else if(now == -1){
//					head.style.transition='0.5s'
//					head.style.background='rgba(0,0,0,0.1)';
//				}
				
				all.style.top = (now * 100) + 'vh';				
								
				var now1 = Math.abs(now);
				for (var i = 0, len = on.length; i <= len - 1; i++) {
					if (i == now1) {
						obj[i].className = 'active';						
						on[i].style.background='#88C021';
						on[i].style.transition='all 0.5s';
						bao[i].style.border='1px solid white';
						bao[i].style.borderRadius='50%';
					} else {
						obj[i].className = '';						
					    on[i].style.background='';
					    bao[i].style.border='';
					    bao[i].style.borderRadius='';
					}
				}
			}
			two(0);
			cri.addEventListener("click", fn2, false);

			function fn2(e) {
				var num = e.target,
					str = num.getAttribute('date-url');
				now = parseInt(str);
				two(0);
			}
								
//第二部分的轮播图part
	  var i=0;
	  var num = 0;
	  var timer = null;
	$('.btnLeft').click(function(){
	   i--;	 
	   if(i < 0) i=2;
	   $('.lunbo_left ul li').eq(i).fadeIn(200).siblings().fadeOut(200);
	   
	});
	$('.btnRight').click(function(){
	    i++;
	    if(i > 2) i=0;
	   $('.lunbo_left ul li').eq(i).fadeIn(200).siblings().fadeOut(200);
	   
	});
	
	function auto(){
		i++;
		if(i > 2) i=0;
	   $('.lunbo_left ul li').eq(i).fadeIn(200).siblings().fadeOut(200);	   
	};
	timer = setInterval(auto,3000);
	
//nav部分	
	$('.header_right ul li:nth-child(1)').hover(function(){
		$('.header_right ul li:nth-child(1) p').text('HOME');
		$('.header_right ul li:nth-child(1)').css('transform','translateY(-25px)');
	},function(){
		$('.header_right ul li:nth-child(1) p').text('home');
		$('.header_right ul li:nth-child(1)').css('transform','translateY(0px)');		
	})
	
	$('.header_right ul li:nth-child(2)').hover(function(){
		$('.header_right ul li:nth-child(2) p').text('US');
		$('.header_right ul li:nth-child(2)').css('transform','translateY(-25px)');
	},function(){
		$('.header_right ul li:nth-child(2) p').text('us');
		$('.header_right ul li:nth-child(2)').css('transform','translateY(0px)');		
	})
	
		$('.header_right ul li:nth-child(3)').hover(function(){
		$('.header_right ul li:nth-child(3) p').text('COURSE');
		$('.header_right ul li:nth-child(3)').css('transform','translateY(-25px)');
	},function(){
		$('.header_right ul li:nth-child(3) p').text('course');
		$('.header_right ul li:nth-child(3)').css('transform','translateY(0px)');		
	})
	
	$('.header_right ul li:nth-child(4)').hover(function(){
		$('.header_right ul li:nth-child(4) p').text('TEACHES');
		$('.header_right ul li:nth-child(4)').css('transform','translateY(-25px)');
	},function(){
		$('.header_right ul li:nth-child(4) p').text('teaches');
		$('.header_right ul li:nth-child(4)').css('transform','translateY(0px)');		
	})
	
	$('.header_right ul li:nth-child(5)').hover(function(){
		$('.header_right ul li:nth-child(5) p').text('ACTIVITY');
		$('.header_right ul li:nth-child(5)').css('transform','translateY(-25px)');
	},function(){
		$('.header_right ul li:nth-child(5) p').text('activity');
		$('.header_right ul li:nth-child(5)').css('transform','translateY(0px)');		
	})
	
	$('.header_right ul li:nth-child(6)').hover(function(){
		$('.header_right ul li:nth-child(6) p').text('CONCACT');
		$('.header_right ul li:nth-child(6)').css('transform','translateY(-25px)');
	},function(){
		$('.header_right ul li:nth-child(6) p').text('concact');
		$('.header_right ul li:nth-child(6)').css('transform','translateY(0px)');		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
},false);