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
          'background-color','rgba(36, 51, 81, '+ 1 +')'
        );
        break;
      case "contact":
        $("#header").css(
          'background-color','rgba(27, 27, 27, '+ 1 +')'
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
  leftCollum.hover(function(){
    leftCollum.css({
      "background-color":"#FFEFBA"
    });
    centerCollum.css({
      "opacity":"0.2",
    });
    rightCollum.css({
      "opacity":"0.2",
    });
    $(".about__title>h3, .about__title>h2").css({
      "color":"#EE5C4F"
    });
    $(".btn--silver").addClass("btn--silver--active");
  });
  /*works page slick slider seting*/
  $("#sliderSites").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    cssEase: "ease-in-out",
    speed: 500,
    swipe: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    /*responsive*/
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          fade: true,
        },
      },
    ],
  });
  $("#sliderBrand").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    cssEase: "ease-in-out",
    speed: 500,
    swipe: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    /*responsive*/
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          fade: true,
        },
      },
    ],
  });
  $("#sliderMobile").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    cssEase: "ease-in-out",
    speed: 500,
    swipe: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1200,
    /*responsive*/
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          fade: true,
        },
      },
    ],
  });
  /*work page change category project*/
  var worksBtn = $("[data-works]");
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
  });
  
});
