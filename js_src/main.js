
jQuery(document).ready(function(){
  "use script";
  /*use active class to header nav link*/
  var menuBtn = $("[data-link]");
  menuBtn.on("click", function (event) {
        event.preventDefault();
      menuBtn.not("active").removeClass("active__link");
      $(this).toggleClass("active__link");
    });
  var screenSection = $("[data-section]");
  


});