/*preloader script*/
$(window).on("load", function(){
  setTimeout(function(){
    $(".preloader").addClass("preloader--done");
  }, 1000);
});
jQuery(document).ready(function () {
  "use script";
  /*burger button script */
  var burgerBtn = $("#burgerBtn");
  var headerBg = $(".primary__header");
  burgerBtn.on("click", function(event){
      event.preventDefault();
      $(".burger__item").toggleClass("burger__item--active");
      headerBg.toggleClass("primary__header--open");
  });
  /*use active class to header nav link*/
  var menuBtn = $("[data-link]");
  menuBtn.on("click", function (event) {
    event.preventDefault();
    /*========header menu open/closed========*/
    headerBg.toggleClass("primary__header--open");
    $(".burger__item").toggleClass("burger__item--active");
    /*=======================================*/
    menuBtn.not("active").removeClass("active__link");
    $(this).toggleClass("active__link");
  });
  menuBtn.on("click", function () {
    var link = $(this).data("link");
    /*=======change bg header=========*/
    switch(link){
      case "home":
        $("#header").css(
          'background-color','rgba(250, 190, 76, '+ 1 +')'
        );
        break;
      case "about":
        $("#header").css(
          'background-color','rgba(245, 233, 218, '+ 1 +')'
        );
        break;
      case "stage":
        $("#header").css(
          'background-color','rgba(74, 163, 199, '+ 1 +')'
        );
        break;
      case "works":
        $("#header").css(
          'background-color','rgba(238, 92, 79, '+ 1 +')'
        );
        break;
      case "faq":
        $("#header").css(
          'background-color','rgba(78, 94, 195, '+ 1 +')'
        );
        break;
      case "contact":
        $("#header").css(
          'background-color','rgba(255, 247, 238, '+ 1 +')'
        );
        break;
      default:
        'background-color','rgba(250, 190, 76, '+ 1 +')'
    }
    $("[data-section]").each(function () {
      var section = $(this).data("section");
      if (section == link) {
        $(this).addClass("show__screen");
      } else {
        $(this).removeClass("show__screen");
      }
    });
  });
  /*about us page hover script*/
  var leftCollum = $(".about__collum--left");
  var centerCollum = $(".about__collum--center");
  var rightCollum = $(".about__collum--right");
  var aboutRow = $(".about__row");
  leftCollum.hover(function(){
    aboutRow.css({
      "background-color":"#FFE173"
    });
    $(this).addClass("bounce");
  });
  leftCollum.mouseleave(function(){
    $(this).removeClass("bounce");
  });
  centerCollum.hover(function(){
    aboutRow.css({
      "background-color":"#EE5C4F"
    });
    $(this).addClass("pulse");
  });
  centerCollum.mouseleave(function(){
    $(this).removeClass("pulse");
  });
  rightCollum.hover(function(){
    aboutRow.css({
      "background-color":"#4AA3C7"
    });
    $(this).addClass("heartBeat");
  });
  rightCollum.mouseleave(function(){
    $(this).removeClass("heartBeat");
  });
  
  /*work page change category project*/
  /*var worksBtn = $("[data-works]");
  worksBtn.on("click", function (event) {
    event.preventDefault();
    worksBtn.not("active").removeClass("btn__active");
    $(this).toggleClass("btn__active");
  });
  worksBtn.on("click", function () {
    var worksData = $(this).data("works");
    $("[data-cat]").each(function () {
      var catData = $(this).data("cat");
      if (worksData == catData) {
        $(this).addClass("show__category");
      } else {
        $(this).removeClass("show__category");
      }
    });
  });*/

  /*wow js initialized*/
  new WOW().init();
  /*waves efect initialized*/
  Waves.attach(".waves-effect");
  Waves.init(); 
});
