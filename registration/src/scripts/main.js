"use strict";

/**
 * инициализация всех инициализаций
 */
$(document).ready(function()
{
	abo.init();
});

window.abo =
{
	init()
	{
		this.test();
	},

	test: function()
	{
		console.log($('.menu__nav'));
	},
	signUp: function(instance)
	{
		event.preventDefault();
		if ($(this).find('.reg-form__form-input').val() == "")
			console.log('false');
		else
			console.log('true');
	},
	logIn: function(instance)
	{
		console.log('Авторизация');
	}
};