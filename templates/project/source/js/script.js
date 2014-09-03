$(document).ready(function() {

	$('.search-tab ul').find('> li:eq(0)').addClass('active');
	
	$('.search-tab ul li a').click(function () {
		var tab = $(this).closest('.search-utility'),
			index = $(this).closest('li').index();
		
		tab.find('ul > li').removeClass('active');
		$(this).closest('li').addClass('active');
		
		tab.find('.tab-content').find('.tabs_item').not('.tabs_item:eq(' + index + ')').slideUp(300);
		tab.find('.tab-content').find('.tabs_item:eq(' + index + ')').slideDown(300);
		
	});
});

$(document).ready(function() {

	$('.hot__tab').find('> li:eq(0)').addClass('active');
	
	$('.hot__tab li a').click(function () {
		var tab = $(this).closest('.hot'),
			index = $(this).closest('.hot__tab > li').index();
		
		tab.find('.hot__tab > li').removeClass('active');
		$(this).closest('li').addClass('active');
		
		tab.find('.tab-content').find('.tabs_item').not('.tabs_item:eq(' + index + ')').hide();
		tab.find('.tab-content').find('.tabs_item:eq(' + index + ')').show();
		
	});
});

$(function() {
	$(".vertical").scrollable({
		vertical:true,
		size: 1
	}).mousewheel();
});