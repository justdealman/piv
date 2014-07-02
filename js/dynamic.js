$(window).load(function() {
	var chars = 0;
	$('.menu li').each(function() {
		chars = chars + $(this).width();
	});
	var size = $('.menu li').size();
	var free = Math.floor((820-chars-(size-1))/(size*2));
	$('.menu li a').css({'padding-left': free+'px', 'padding-right': free+'px'});

	var pleft = Math.floor((820-chars-(size-1)-(free*size*2))/2)+free;
	$('.menu li:first-child a').css({'padding-left': pleft+'px'});
	var pright = (820-chars-(size-1)-(free*size*2)+free-pleft)+free-1;
	$('.menu li:last-child a').css({'padding-right': pright+'px'});
});
$(document).ready(function() {
	$('.slider').slides({
		generatePagination: true,
		generateNextPrev: false,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuad',
		play: 7500,
		pause: 2500
	});
	$('.review > div > div > div').each(function() {
		var min = $(this).children('img').height()+7;
		$(this).css({'min-height': min+'px'});
	});
	$('.list > div > div:nth-child(2n) h2').css({'text-align': 'right'});
	$('.list > div > div:nth-child(2n) > div').css({'padding': '0 200px 0 0'});
	$('.list > div > div:nth-child(2n) > div > div').css({'left': 'auto', 'right': '0'});
	$('.review > div > div:nth-child(2n) h3').css({'text-align': 'right', 'margin': '0 70px 24px 240px'});
	$('.review > div > div:nth-child(2n) > div').css({'padding': '0 70px 0 240px'});
	$('.review > div > div:nth-child(2n) > div > img').css({'right': 'auto', 'left': '0'});
	$('.catalog > div:nth-child(1), .catalog > div:nth-child(2), .catalog > div:nth-child(3)').css({'padding-top': '0'});
	$('.catalog > div:nth-child(3n)').css({'padding-right': '0', 'margin-right': '0', 'background': 'none'});
	var premax = -1;
	$('.prenew > div').each(function() {
		var h = $(this).height(); 
		premax = h > premax ? h : premax;
	});
	premax = premax-16;
	$('.prenew > div').height(premax);
	$('.subscribe > p a').click(function() {
		$('.opacity, .subscribe_modal').fadeIn(150);
		return false;
	});
	$('.subscribe_modal').append('<span class="close"></span>');
	$('.subscribe_modal .close').click(function() {
		$('.opacity, .subscribe_modal').fadeOut(150);
		return false;
	});
	$('.opacity').click(function() {
		$('.opacity, .subscribe_modal').fadeOut(150);
		return false;
	});
	$(this).keydown(function(eventObject){
		if (eventObject.which == 27)
		$('.opacity, .subscribe_modal').fadeOut(150);
	});
});