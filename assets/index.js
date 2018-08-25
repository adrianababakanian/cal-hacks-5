$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll > 0) {
      $(".header").addClass("lift");
  } else {
      $(".header").removeClass("lift");
  }
});
