import "./index.scss";

(function ($) {
  $(window).on("load", function () {
    $("body").mCustomScrollbar({
      setHeight: "100vh",
      scrollbarPosition: "inside",
      autoHideScrollbar: true,
    });
  });
})(jQuery);
