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
		this.test();
	},

	test: function()
	{
		console.log('hello');
	}
};