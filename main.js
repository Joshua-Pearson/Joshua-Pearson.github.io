$(document).ready(function() {

  var s = skrollr.init();

  $("a").mouseover(function() {
    $(this).addClass("animated pulse")
  }).mouseout(function() {
    $(this).removeClass("animated pulse")
  });

  $("#name").mouseover(function () {
    $(this).addClass("animated rubberBand")
  }).mouseout(function () {
    $(this).removeClass("animated rubberBand")
  });
});