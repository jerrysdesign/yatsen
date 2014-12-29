$ ->
  $(".search-tab > ul").tabs ".search-utility .tabs-item"
  $(".hot__tab").tabs ".hot .tabs-item"
  $(".function-tab").tabs ".function-utility .tabs-item"
  $(".search__tab").tabs ".searchs .tabs-item",
    initialIndex: 1

  $(".vertical").scrollable
    vertical: true
    size: 1
    mousewheel: true

  $(".scrollable").scrollable mousewheel: true
  $(".accordion").tabs ".accordion .panel",
    tabs: ".accordion .list"
    effect: "slide"
    initialIndex: 0

  $(".panel .item").click ->
    $(this).siblings().removeClass "active"
    $(this).addClass "active"

(($) ->
  $.fn.striped = (tag) ->
    $this = $(this)
    $this.each ->
      tag.addClass "odd"

) jQuery