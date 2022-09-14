import "./index.scss";

(function ($) {
  $(window).on("load", function () {
    $("html").mCustomScrollbar({
      axis: "y",
      theme: "dark",
    });
  });
})(jQuery);
