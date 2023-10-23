// SideBar
$(".open_right").on("click", function () {
  $(".right_sidebar").toggleClass("active");
  $(".overlay-m").fadeToggle(600);
});

$(".open_left").on("click", function () {
  $(".left_sidebar").addClass("active");
  $(".overlay-m").fadeIn(600);
});

$(".open_search").on("click", function () {
  $(".search").toggleClass("active");
  $(".overlay-m").fadeIn(500);
});

$(".overlay-m").on("click", function () {
  $(".right_sidebar").removeClass("active");
  $(".left_sidebar").removeClass("active");
  $(".search").removeClass("active");
  $(this).fadeOut(500);
});