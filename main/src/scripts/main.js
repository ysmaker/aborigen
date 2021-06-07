"use strict";

/**
 * инициализация всех инициализаций
 */


$(document).ready(function()
{
	Abo.init();
});



window.Abo =
{
	init()
	{
		this.selectChoose();
		this.datapickerOptions();
		this.faqSwitch();
		this.slider();
		this.bigSlider();
		this.initMasks();
		this.toggleMenu();
		this.tabsClick();
		this.columnsSize();
		this.textareaEditor();
		this.initMap();
	},
	initMap: function()
	{

		var styles =
		[
			{
				"featureType": "landscape.man_made",
				"elementType": "geometry",
				"stylers":
				[
					{
						"hue": "#ff0000"
					}
				]
			},
			{
				"featureType": "landscape.man_made",
				"elementType": "geometry.fill",
				"stylers":
				[
					{
						"hue": "#ff3200"
					},
					{
						"visibility": "on"
					}
				]
			}
		];
		var coordinates = {lat: 41.00877381264615, lng: 28.976113208815722},
			map = new google.maps.Map(document.getElementById('map'), {
				center: coordinates,
				zoom: 9,
				disableDefaultUI: false
			});
		var marker = new google.maps.Marker({
			position: coordinates,
			map: map,
			icon: 'img/marker.svg'
		});
		map.setOptions({styles: styles});
	},
	toggleMenu: function()
	{
		var nav = $('.header__nav');
		var burger = $('.header__burger');
		var top = $('.header__menu-left');
		burger.on('click', function()
		{
			$(this).toggleClass('header__burger--active');
			nav.toggleClass('header__nav--show');
			top.toggleClass('header__menu-left--active');

		});
		$(document).on('click', function (e)
		{

			if ((nav.has(e.target).length === 0) && (top.has(e.target).length === 0))
			{
				nav.removeClass('header__nav--show');
				burger.removeClass('header__burger--active');
				top.removeClass('header__menu-left--active');
			}
		});
	},
	selectChoose: function()
	{
		$('.select__header').on('click', function()
		{
			if (!($(this).parents('.select').hasClass('select--active')))
			{
				$('.select--active').find('.select__icon').toggleClass('select__icon--rotate');
				$('.select--active').removeClass('select--active');
			}
			$(this).siblings('.select__body').removeClass('select__body--close');
			$(this).parents('.select').toggleClass('select--active');
			$(this).find('.select__icon').toggleClass('select__icon--rotate');
		});
		$('.select__item').on('click', function()
		{
			$(this).parents('.select').toggleClass('select--active');
			$(this).parents('.select').find('.select__current').html($(this).html());
			$(this).parents('.select').find('.select__icon').toggleClass('select__icon--rotate');
		});
		$(document).on('click', function(e)
		{
			if ((!( $('.select--active').is(e.target))) && ($('.select--active').has(e.target).length === 0))
			{
				$('.select--active').find('.select__icon').toggleClass('select__icon--rotate');
				$('.select--active').removeClass('select--active');
			}
		});
	},
	datapickerOptions: function()
	{
		var date = new Date();
		var defaultDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' - ' + (date.getDate()+7) + '.' + date.getMonth() + '.' + date.getFullYear();
		$('.datepicker-here').attr('placeholder', defaultDate);
		$('.datepicker-here').datepicker({
			minDate: new Date(),
			autoClose: true,
			offset: 7,
			toggleSelected: false,
			navTitles: {
				days: 'MM'
			}
		});
	},
	popups:
	{
		show(popup)
		{
			$('._overlay').addClass('_show');
			$('body').addClass('ow-hidden');
			$(popup).addClass('_show');

			setTimeout(()=>
			{
				this.addClickOutside(popup);
			}, 10);
			console.log(1);
		},
		close(popup)
		{
			$('._overlay').removeClass('_show');
			$('body').removeClass('ow-hidden');
			$(popup).removeClass('_show');
			this.removeClickOutside();
		},
		remove(popup)
		{
			$(popup).remove();
		},
		removeClickOutside()
		{
			$(document).off('click');
		},
		addClickOutside(popup)
		{
			$(document).on('click',(e)=>
			{
				if ($(e.target).closest(popup).length) return;
				this.close(popup);
			});
		},
	},
	faqSwitch: function()
	{
		$('.faq__wrap-item').on('click', function()
		{
			if (!($(this).hasClass('faq__wrap-item--active')))
			{
				$('.faq__wrap-item--active').removeClass('faq__wrap-item--active');
			}
			$(this).toggleClass('faq__wrap-item--active');
		});
	},
	slider: function()
	{
		const $ = require('jquery');
		var $slider = $('.slider');
		var $progressBar = $('.progress');
		var $progressFill = $('.progress-fill');

		$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide)
		{
			var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;

			$progressBar.attr('aria-valuenow', calc );
			$progressFill.css('width', calc + '%' );
		});
		$(window).on('load', function()
		{
			$slider.slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				swipeToSlide: true,
				touchThreshold: 500,
				variableWidth: true,
				prevArrow: "<svg class='slick-prev slick-arrow' width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 -9.39371e-07 24 -2.09815e-06C10.7452 -3.25692e-06 3.25692e-06 10.7452 2.09815e-06 24C9.39371e-07 37.2548 10.7452 48 24 48ZM18.4394 22.9393L25.1894 16.1893C25.4823 15.8964 25.8662 15.7499 26.25 15.7499C27.5743 15.7499 28.2582 17.363 27.3106 18.3105L21.6213 23.9999L27.3106 29.6893C27.8964 30.2751 27.8964 31.2248 27.3106 31.8106C26.7248 32.3963 25.7751 32.3963 25.1893 31.8106L18.4393 25.0606C17.8536 24.4747 17.8536 23.5251 18.4394 22.9393Z' fill='#258EFA'/></svg>",
				nextArrow: "<svg class='slick-next slick-arrow' width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM29.5606 25.0607L22.8106 31.8107C22.5177 32.1036 22.1338 32.2501 21.75 32.2501C20.4257 32.2501 19.7418 30.637 20.6894 29.6895L26.3787 24.0001L20.6894 18.3107C20.1036 17.7249 20.1036 16.7752 20.6894 16.1894C21.2752 15.6037 22.2249 15.6037 22.8107 16.1894L29.5607 22.9394C30.1464 23.5252 30.1464 24.4749 29.5606 25.0607Z' fill='#258EFA'/></svg>",
			});
		});
	},
	bigSlider: function()
	{
		const $ = require('jquery');
		$(window).on('load', function()
		{
			$('.big-slider-for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				swipeToSlide: true,
				fade: true,
				asNavFor: '.big-slider-nav',
				prevArrow: '<svg class="big-slick-prev big-slick-arrow" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0C10.7452 0 0 10.2403 0 22.8724C0 35.5044 10.7452 45.7447 24 45.7447C37.2548 45.7447 48 35.5044 48 22.8724C48 10.2403 37.2548 0 24 0ZM29.5606 23.8832L22.8106 30.3161C22.5177 30.5952 22.1338 30.7348 21.75 30.7348C20.4257 30.7348 19.7418 29.1976 20.6894 28.2945L26.3787 22.8725L20.6894 17.4504C20.1036 16.8921 20.1036 15.987 20.6894 15.4288C21.2752 14.8705 22.2249 14.8705 22.8107 15.4288L29.5607 21.8616C30.1464 22.4199 30.1464 23.325 29.5606 23.8832Z" fill="white"/></svg>',
				nextArrow: '<svg class="big-slick-next big-slick-arrow" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0C10.7452 0 0 10.2403 0 22.8724C0 35.5044 10.7452 45.7447 24 45.7447C37.2548 45.7447 48 35.5044 48 22.8724C48 10.2403 37.2548 0 24 0ZM29.5606 23.8832L22.8106 30.3161C22.5177 30.5952 22.1338 30.7348 21.75 30.7348C20.4257 30.7348 19.7418 29.1976 20.6894 28.2945L26.3787 22.8725L20.6894 17.4504C20.1036 16.8921 20.1036 15.987 20.6894 15.4288C21.2752 14.8705 22.2249 14.8705 22.8107 15.4288L29.5607 21.8616C30.1464 22.4199 30.1464 23.325 29.5606 23.8832Z" fill="white"/></svg>',
			});
			$('.big-slider-nav').slick({
				infinite: true,
				variableWidth: true,
				swipeToSlide: true,
				touchThreshold: 10,
				slidesToShow: 1,
				slidesToScroll: 1,
				asNavFor: '.big-slider-for',
				focusOnSelect: true,
				arrows: false,
			});
		});
	},
	initMasks: function()
	{
		$('.subscribe__input').inputmask({"mask": "+7 999 999 99 99", showMaskOnHover: false, "placeholder": "·"});
		$('.filter__item--phone').find('.filter__item-input').inputmask({"mask": "+7 999 999 99 99", showMaskOnHover: false, "placeholder": "·"});
	},
	tabsClick: function()
	{
		$('.resorts__item-button').on('click', function()
		{
			var slide = $(this).parents('.slick-slide');
			var num = $(this).attr('data-num');
			slide.find('.resorts__item-button').removeClass('resorts__item-button--inactive');
			$(this).addClass('resorts__item-button--inactive');

			slide.find('.resorts__item-content').addClass('resorts__item-content--hide');
			slide.find('.resorts__item-tabs').find('.resorts__item-content[data-num='+num+']').removeClass('resorts__item-content--hide');
			Abo.columnsSize();
		});
	},
	columnsSize: function()
	{
		var max = $('.resorts__item-content').not('.resorts__item-content--hide').find('.resorts__item-value').find('span').eq(0).text();
		$('.resorts__item-content').not('.resorts__item-content--hide').find('.resorts__item-column').each(function( index )
		{
			if ($(this).siblings('.resorts__item-value').find('span').text() > max)
				max = $(this).siblings('.resorts__item-value').find('span').text();
		});
		$('.resorts__item-content').not('.resorts__item-content--hide').find('.resorts__item-column').each(function( index )
		{
			$(this).css('height', function()
			{
				return (($(this).siblings('.resorts__item-value').find('span').text() / max)*50);
			});
			$(this).css('opacity', function()
			{
				return ($(this).siblings('.resorts__item-value').find('span').text() / max);
			});
		});
		$('.resorts__item-content--hide').find('.resorts__item-column').each(function( index )
		{
			$(this).css('height', '0');
		});
		console.log('fd');
	},
	textareaEditor: function()
	{
		console.log('1');
		tinymce.init({
			selector: '#classic-editor',
			height: 335,
			menubar: false,
			toolbar: 'bold italic backcolor | alignleft aligncenter ' +
				'alignright alignjustify | bullist numlist outdent indent | ' +
				'removeformat | help',
			content_style: 'body { font-size: 13px;line-height: 30px;color: #000000; } h2{font-weight: 600;font-size: 16px;line-height: 30px;color: #000000;}'
		});
		console.log(2);
	},
};

window.onload = function()
{
	$('body').removeClass('preload');
};