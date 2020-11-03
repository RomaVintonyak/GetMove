jQuery(document).ready(function () {
  "use script";
  /*use active class to header nav link*/
  var menuBtn = $("[data-link]");
  menuBtn.on("click", function (event) {
    event.preventDefault();
    menuBtn.not("active").removeClass("active__link");
    $(this).toggleClass("active__link");
  });
  menuBtn.on("click", function (event) {
    event.preventDefault();
    var link = $(this).data("link");
    $("[data-section]").each(function () {
      var section = $(this).data("section");
      if (section == link) {
        $(this).addClass("show__screen");
      } else {
        $(this).removeClass("show__screen");
      }
    });
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
  /*work page change category project*/
  

});
