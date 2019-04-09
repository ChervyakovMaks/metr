$(function() {

	// Custom JS
	$(document).on('af_complete', function(event, response) {
		var form = response.form;
		if (response.success) {
			$('.closeModal').trigger('click');
			//var param = {loadpage: 'Отправка формы'};
			//yaCounter49355807.reachGoal('FORM_GOAL', param);
			// site order 
			//gtag('event', 'form_order', { 'event_category': 'form_order', 'event_action': 'sendForm' });

		}


	});

});

$('header .main-menu li').on({
	mouseenter: function () {
		$('header .active').removeClass('active');
		$('.submenu').slideUp('10');
		$('.trigger-submenu a img').attr("src","assets/templates/default/img/Artboard_5.svg");
	}
});

$('.trigger-submenu').on({
	mouseenter: function () {
        //stuff to do on mouse enter
       $('.submenu').slideDown('10');
       $(this).addClass('active');
       $('.trigger-submenu a img').attr("src","assets/templates/default/img/for-trigger-submenu.svg");
    },
    mouseleave: function () {
        //stuff to do on mouse leave
        
    }
});

$('.logo, .head-line').on({
	mouseenter: function () {
        //stuff to do on mouse enter
       $('header .active').removeClass('active');
		$('.submenu').slideUp('10');
		$('.trigger-submenu a img').attr("src","assets/templates/default/img/Artboard_5.svg");
    },
    mouseleave: function () {
        //stuff to do on mouse leave
        
    }
});



$('.submenu').on({
	mouseleave: function () {
		$('.submenu').slideUp('10');
		$('header .active').removeClass('active');
		$('.trigger-submenu a img').attr("src","assets/templates/default/img/Artboard_5.svg");
	}
});

$('#main-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 3000,
	arrows: true,
	dots: true,
	appendDots: '.custom-main-dots',
	prevArrow: $('#main-slider-prev'),
	nextArrow: $('#main-slider-next')
});

$('.product-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: true,
	prevArrow: $('#product-prev'),
	nextArrow: $('#product-next'),
	responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    }
    ]
});

$('.certificates-slider').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: true,
	prevArrow: $('#certificates-prev'),
	nextArrow: $('#certificates-next'),
	responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
     {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
    ]
});

$('.completed-objects-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 6000,
	arrows: true,
	dots: true,
	appendDots: '.custom-dots',
	prevArrow: $('#object-prev'),
	nextArrow: $('#object-next')
});

$('.review-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: true,
	prevArrow: $('#reviews-prev'),
	nextArrow: $('#reviews-next'),
	responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
    ]
});

$('.partners-slider').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: true,
	prevArrow: $('#partners-prev'),
	nextArrow: $('#partners-next'),
	responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
    ]
});

$('.catalog-reviews-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: true,
	prevArrow: $('#catalog-reviews-prev'),
	nextArrow: $('#catalog-reviews-next')
});

$('.catalog-articles-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: true,
	prevArrow: $('#catalog-articles-prev'),
	nextArrow: $('#catalog-articles-next')
});



$('.minus-btn').on('click', function(e) {
	e.preventDefault();
	var $this = $(this);
	var $input = $this.closest('div').find('input');
	var value = parseInt($input.val());

	if (value > 1) {
		value = value - 1;
	} else {
		value = 0;
	}

	$input.val(value);

});

$('.plus-btn').on('click', function(e) {
	e.preventDefault();
	var $this = $(this);
	var $input = $this.closest('div').find('input');
	var value = parseInt($input.val());

	if (value < 100) {
		value = value + 1;
	} else {
		value =100;
	}

	$input.val(value);
});




// Реализуем открытие каталога
$('#open-catalog-js').click(function(){
	$('.for-mobile-catalog-menu').css({'left' : '0'});
	$('body').addClass('overflowy');
});
$('#close-catalog-menu').click(function(){
	$('.for-mobile-catalog-menu').css({'left' : '-9999px'});
	$('body').removeClass('overflowy');
});



$('#open-header-js').click(function(){
	$('.for-mobile-header-menu').css({'right' : '0'});
	$('body').addClass('overflowy');
});
$('#close-header-menu').click(function(){
	$('.for-mobile-header-menu').css({'right' : '-9999px'});
	$('body').removeClass('overflowy');
});


$('.have-subsub-menu').click(function(){
	$(this).css({'background-color' : '#ffdc2e'});
	$('.container-for-header-subsub-menu').css({'right' : '100px'});
	$('.container-for-header-menu').css({'right' : '-285px'});
	$('.for-close-header-menu').css({'right' : '-285px'});
});

if ( $(window).width() < 550 ) {
	$('.have-subsub-menu').click(function(){
		$(this).css({'background-color' : '#ffdc2e'});
		$('.container-for-header-subsub-menu').css({'right' : '20%'});
		$('.container-for-header-menu').css({'right' : '-50%'});
		$('.for-close-header-menu').css({'right' : '-50%'});
	});
}
$('.header-subsub-menu-title').click(function(){
	$('.have-subsub-menu').css({'background-color' : '#fff'});
	$('.container-for-header-menu').css({'right' : '0px'});
	$('.for-close-header-menu').css({'right' : '0px'});
	$('.container-for-header-subsub-menu').css({'right' : '-9999px'});
});



$('.logo').click(function(){
	location.href = '/';
});




$('.offer-sale .first-step .next-step').click(function(){
	$('.offer-sale .first-step').slideUp();
	$('.offer-sale .second-step').slideDown();
});

$('.offer-sale .second-step .next-step').click(function(){
	$('.offer-sale .second-step').slideUp();
	$('.offer-sale .third-step').slideDown();
});

$('.offer-sale .third-step .next-step').click(function(){
	$('.offer-sale .third-step').slideUp();
	$('.offer-sale .fourth-step').slideDown();
});

$('.offer-sale .fourth-step .next-step').click(function(){
	$('.offer-sale .fourth-step').slideUp();
	$('.offer-sale .final-step').slideDown();
	$('.offer-main-p').slideUp();
});