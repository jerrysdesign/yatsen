$(function() {

	$(".search-tab > ul").tabs(".search-utility .tabs-item");
	$(".hot__tab").tabs(".hot .tabs-item");
	$(".function-tab").tabs(".function-utility .tabs-item");

	$(".vertical").scrollable({
		vertical:true,
		size: 1,
		mousewheel: true
	});
	
});

;(function ($){
	$.fn.striped = function (tag){
		var $this = $(this);
		$this.each(function(){
			tag.addClass("odd");
		});
	};
})(jQuery);