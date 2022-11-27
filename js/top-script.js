$(document).ready(function(){
  $("#menu-drop").hide();

  $("#services-btn").hover(function(){
    $("#menu-drop").show();
  });
  $("#menu-drop").on("mouseleave", function(){
    $("#menu-drop").hide();
  });


})