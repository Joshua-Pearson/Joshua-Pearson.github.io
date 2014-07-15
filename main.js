$(document).ready(function() {

  var s = skrollr.init();

  $("a").mouseover(function() {
    $(this).addClass("animated pulse");
  }).mouseout(function() {
    $(this).removeClass("animated pulse");
  });

  $("#name").mouseover(function() {
    $(this).addClass("animated rubberBand");
  }).mouseout(function () {
    $(this).removeClass("animated rubberBand");
  });

  // $(window).scroll(function() {
  //   $("#top nav .contacts_buttons").addClass("fa-spin");
  //   setTimeout(function() {
  //     $("#top nav .contacts_buttons").removeClass("fa-spin");
  //   }, 2000);
  // });

  $(window).scroll(function() {
    $("#social-links a").addClass("fa-spin");
    setTimeout(function() {
      $("#social-links a").removeClass("fa-spin");
    }, 2000);
  });


});