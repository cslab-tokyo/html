$(document).ready(function() {

	$(".fancybox").fancybox({
		wrapCSS			: 'fancybox-custom',
		closeClick	:	true,
		loop				:	false,
		nextClick		:	false,
		padding			:	5,
		margin : 40,
		openEffect:'elastic',
		closeEffect:'elastic',
		nextEffect:'fade',
		prevEffect:'fade',
		helpers : {
			title : {
				type : 'outside'
			},
			overlay : {
				opacity	:	0.85,
				css	:{
					'background-color' : '#000'
				}
			},
			thumbs : {
				width  : 96,
				height : 54
			}
		}
	});
	
	$(".gallery img").hover(function(){
		$(this).fadeTo("fast", 0.5);
	},function(){
		$(this).fadeTo("fast", 1.0);
	});
	
});