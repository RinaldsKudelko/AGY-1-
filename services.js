$(document).ready(function(){
  console.log("ready")
  $(".card-desc").hide();

  $(".ser-card").on("mouseenter", function(){
    $(this).find("p").fadeIn(500);
    $(this).find("h1").animate({fontSize:"90px"}, 500);
    $(this).find(".card-overlay").animate({opacity:"0.7"}, 500);
  });
  $(".ser-card").on("mouseleave", function(){
    $(this).find("p").fadeOut(500);
    $(this).find("h1").animate({fontSize:"130px"}, 500);
    $(this).find(".card-overlay").animate({opacity:"0.5"}, 500);
  });
});