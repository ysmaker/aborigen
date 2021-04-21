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
	},

	selectChoose: function()
	{
		$('.select__header').on('click', function()
		{
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
			if ((!( $('.select').is(e.target))) && ($('.select').has(e.target).length === 0))
			{
				$('.select--active').find('.select__icon').toggleClass('select__icon--rotate');
				$('.select').removeClass('select--active');
			}
		});
	},
	datapickerOptions: function()
	{

		$('.filter__item-input--date').datepicker({
			// minDate: new Date(),
			// clearButton: true,
			// autoClose: true,
			offset: 7,
			navTitles: {
				days: 'MM'
			}
		});

	},
};