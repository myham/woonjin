window.addEventListener('load',function(){	
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
},false);