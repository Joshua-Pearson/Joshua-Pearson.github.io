$(document).ready(function() {

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

  $("#contact").click(function() {
    $("#social-links a").addClass("fa-spin");
    setTimeout(function() {
      $("#social-links a").removeClass("fa-spin");
    }, 2000);
  });

  $("#projects").click(function() {
    $(".et-wrapper .et-page.et-page-current button").click();
    if (document.getElementById("projects").text == "My Projects") {
      $("#projects").html("About Me");
    } else if (document.getElementById("projects").text == "About Me") {
      $("#projects").html("Main Page");
    } else {
      $("#projects").html("My Projects");
    }
  });

});
