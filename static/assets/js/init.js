(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    // $(".dropdown-trigger").dropdown({hover: true});
    $('.modal').modal({dismissible: true});
    $('select').formSelect();
    $('.tooltipped').tooltip();
    $('.tabs').tabs();
    /*function mediaFunction(x) {

      if (x.matches) { // If media query matches

        $(".dropdown-trigger").dropdown();
      } else {

        $(".dropdown-trigger").dropdown({hover: true});
      }
    }
    
    var x = window.matchMedia("(max-width: 992px)")
    mediaFunction(x) // Call listener function at run time
    x.addListener(mediaFunction) // Attach listener function on state changes*/

    if (("ontouchstart" in document.documentElement) || ('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
      $(".dropdown-trigger").dropdown();
    } else {
      $(".dropdown-trigger").dropdown({ hover: true });
    }
    $('.fixed-action-btn').floatingActionButton();

  }); // end of document ready
})(jQuery); // end of jQuery name space