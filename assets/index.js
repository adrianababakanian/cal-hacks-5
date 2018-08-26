$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll > 66) {
      $(".header").addClass("lift");
  } else {
      $(".header").removeClass("lift");
  }
});
