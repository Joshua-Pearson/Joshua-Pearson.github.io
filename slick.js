$(document).ready(
  function () {
    $('#my_carousel').slick(
      {
        speed: 500,
        draggable: false
      }
    );
      $(function() {
        $("#me").click(function() {
          $("#about").toggle(1000);
          });
      $(function() {
        $("#info").click(function() {
          $("#contact").toggle(1000);
        });
      });
    });
  }
);