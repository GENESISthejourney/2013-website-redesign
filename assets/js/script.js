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



		$('header[role=banner] nav ul:first').find('a').click(function(e){
			e.stopPropagation();
			var fancyNav = false;
			var obj = $(this).parent('li');
			var navId = obj.data('nav');

			if ($(window).width() > 599)
				fancyNav = true;

			if(!obj.children('ul').length && obj.data('nav') != 'search')
				return;

			if(obj.hasClass('active')){
				obj.removeClass('active icon-minus').addClass('icon-plus');
				$('#'+navId).removeClass('active');
				return false;
			}

			obj.parent('ul').children('li').removeClass('active');
			obj.addClass('active icon-minus').removeClass('icon-plus');
			$('.fancy-nav').removeClass('active');

			if (fancyNav){
				$('#'+navId).addClass('active');
			}
			return false;
		});



		$('#searchTerm').focus(function(){
			$(this).parent('form').addClass('focus').addClass('expanded');
		});

		$('#searchTerm').blur(function(){
			$(this).parent('form').removeClass('focus');

			if ($(this).val().length == 0)
				$(this).parent('form').removeClass('expanded');
		});

		$('html').click(function(e){
			$('header[role=banner] nav ul li').removeClass('active');
			$('.fancy-nav').removeClass('active');
		});

		$('.fancy-nav').click(function(e){
			e.stopPropagation();
		});

    });
})(jQuery);
