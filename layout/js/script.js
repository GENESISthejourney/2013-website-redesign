// JavaScript Document

(function($){
	$(document).ready(function() {

		$(window).bind('resize orientationchange',function(){
			if($('#hero')){
				$('#hero').height($('#hero .slide:first img').height());
			}
			if($('#hero').height() == 0){
				$('#hero').height($('#hero .slide:last img').height());
			}
		});

		$('#hero').onImagesLoad(function(){
			$('#hero').height($('#hero .slide img').height());
		});


		$('.mobile-nav a').click(function(){
			$('body').toggleClass('active-nav');
			return false;
		});

		

		$('header[role=banner] nav ul:first').find('a').click(function(){
			var obj = $(this).parent('li');

			if(!obj.children('ul').length)
				return;

			if(obj.hasClass('active')){
				obj.removeClass('active');
				return false;
			}

			obj.parent('ul').children('li').removeClass('active');

			obj.addClass('active');

			return false;
		});
    });	
})(jQuery);