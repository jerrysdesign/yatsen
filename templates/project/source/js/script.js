$(function() {
  $(".search-tab > ul").tabs(".search-utility .tabs-item");
  $(".hot__tab").tabs(".hot .tabs-item");
  $(".function-tab").tabs(".function-utility .tabs-item");
  $(".search__tab").tabs(".searchs .tabs-item", {
    initialIndex: 1
  });
  $(".vertical").scrollable({
    vertical: true,
    size: 1,
    mousewheel: true
  });
  $(".scrollable").scrollable({
    mousewheel: true
  });
  $(".accordion").tabs(".accordion .panel", {
    tabs: ".accordion .list",
    effect: "slide",
    initialIndex: 0
  });
  return $(".panel .item").click(function() {
    $(this).siblings().removeClass("active");
    return $(this).addClass("active");
  });
});

(function($) {
  return $.fn.striped = function(tag) {
    var $this;

    $this = $(this);
    return $this.each(function() {
      return tag.addClass("odd");
    });
  };
})(jQuery);
