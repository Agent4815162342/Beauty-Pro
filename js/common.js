$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo-beauty.png">'
		}
	});

	var api = $('#my-menu').data('mmenu');
	var $icon = $('.hamburger');
	api.bind('open:start', function() {
		setTimeout(function() {
			$icon.addClass("is-active")
		}, 10)
	});
	api.bind('close:start', function() {
		setTimeout(function() {
			$icon.removeClass("is-active");
		}, 10)
	});
	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselServices();
		}, 100)
	})
	$('.carousel-services').owlCarousel({
 	loop: true,
 	autoplay: true,
 	autoplayHoverPause: true,
 	nav: true,
 	smartSpeed: 700,
 	navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
 	responsiveClass: true,
 	dots: false,
 	responsive: {
 		0: {
 			items: 1
 		},
 		800: {
 			items: 2
 		},
 		1100: {
 			items: 3
 		}
 	}
 });

	$('select').selectize({})
	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		autoHeight: true
	})

	$("form,callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.succes').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.succes').removeClass('active'),fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});




	function carouselServices() {
		$('.carousel-services-item').each(function() {
			var ths = $(this),
			thsh = ths.find('.carousel-services-content').outerHeight();
			ths.find('.carousel-services-image').css('min-height', thsh)

		})
	};
	carouselServices();
	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	function onResize() {
		$('.carousel-services-content').equalHeights();
	}onResize();
	window.onresize = function() {onResize()};

});

