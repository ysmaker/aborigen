"use strict";

/**
 * инициализация всех инициализаций
 */


$(document).ready(function()
{
	Abo.init();
});



var Abo =
{
	init()
	{
		this.selectChoose();
		this.datapickerOptions();
		this.faqSwitch();
		this.slider();
		this.initMasks();
		this.toggleMenu();
		this.tabsClick();
		this.columnsSize();
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
			$(this).parents('.select').find('.select__current').text($(this).text());
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
		$('.filter__item-input--date').attr('placeholder', defaultDate);
		$('.filter__item-input--date').datepicker({
			minDate: new Date(),
			autoClose: true,
			offset: 7,
			toggleSelected: false,
			navTitles: {
				days: 'MM'
			}
		});
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
				variableWidth: true,
				prevArrow: "<svg class='slick-prev slick-arrow' width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 -9.39371e-07 24 -2.09815e-06C10.7452 -3.25692e-06 3.25692e-06 10.7452 2.09815e-06 24C9.39371e-07 37.2548 10.7452 48 24 48ZM18.4394 22.9393L25.1894 16.1893C25.4823 15.8964 25.8662 15.7499 26.25 15.7499C27.5743 15.7499 28.2582 17.363 27.3106 18.3105L21.6213 23.9999L27.3106 29.6893C27.8964 30.2751 27.8964 31.2248 27.3106 31.8106C26.7248 32.3963 25.7751 32.3963 25.1893 31.8106L18.4393 25.0606C17.8536 24.4747 17.8536 23.5251 18.4394 22.9393Z' fill='#258EFA'/></svg>",
				nextArrow: "<svg class='slick-next slick-arrow' width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM29.5606 25.0607L22.8106 31.8107C22.5177 32.1036 22.1338 32.2501 21.75 32.2501C20.4257 32.2501 19.7418 30.637 20.6894 29.6895L26.3787 24.0001L20.6894 18.3107C20.1036 17.7249 20.1036 16.7752 20.6894 16.1894C21.2752 15.6037 22.2249 15.6037 22.8107 16.1894L29.5607 22.9394C30.1464 23.5252 30.1464 24.4749 29.5606 25.0607Z' fill='#258EFA'/></svg>",
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
			console.log(num);
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
		});
		$('.resorts__item-content--hide').find('.resorts__item-column').each(function( index )
		{
			$(this).css('height', '0');
		});
		// console.log(max);
	},
};

window.onload = function()
{
	$('body').removeClass('preload');
};