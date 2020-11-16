$(".leftbar-dropdown > a").click(function() {
    $(".leftbar-submenu").slideUp(200);
    if (
      $(this)
        .parent()
        .hasClass("active")
    ) {
      $(".leftbar-dropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
    } else {
      $(".leftbar-dropdown").removeClass("active");
      $(this)
        .next(".leftbar-submenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
    }
  });
  
  $("#close-sidebar").click(function() {
    $(".page-wrap").removeClass("tog");
  });
  $("#side-show").click(function() {
    $(".page-wrap").addClass("tog");
  });
  