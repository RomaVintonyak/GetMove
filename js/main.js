
jQuery(document).ready(function(){
  "use script";
  /*use active class to header nav link*/
  var menuBtn = $("[data-link]");
  menuBtn.on("click", function (event) {
        event.preventDefault();
      menuBtn.not("active").removeClass("active__link");
      $(this).toggleClass("active__link");
    });
  menuBtn.on("click", function(event){
    event.preventDefault();
    var link = $(this).data("link");
    $("[data-section]").each(function (){
      var section = $(this).data("section");
      if(section == link){
        $(this).addClass("show__screen");
      }else{
        $(this).removeClass("show__screen");
      }
    });
  });
  


});