$(document).ready(function(){
  $(".fadededge").hide()
  $(".article").on("mouseenter", function(){
    $(this).find("h2").animate({
      right:"300px",
      top:"10px",
      opacity:1,
    }, 300);
    $(this).find(".fadededge").show(400);
    $(this).find("img").css("filter", "blur(5px)");
  });
  $(".article").on("mouseleave", function(){
    $(this).find("h2").animate({
      right:"-10px",
      bottom:"50px",
      opacity:1,
    }, 300);
    $(this).find(".fadededge").hide(400)
    $(this).find("img").css("filter", "blur(0px)");
  });
});