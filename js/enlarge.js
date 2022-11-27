$(document).ready(function(){
  console.log("enlarge activated")
  
  $(".enlarge").on("click", function(){
    let theimg = $(this).attr("src")

    let thediv = "<div class = 'enlarge-overlay' style='background-color:rgba(0,0,0,0.9); position:fixed; top:0px; left:0px; width:100%; height:100vh; z-index:1000; min-height: 100vh; min-height: -moz-available; min-height: -webkit-fill-available; min-height: fill-available;'><img class='enlarge-img' src='" + theimg + "' style='position:absolute; left:50%; transform:translate(-50%, -50%); top:50%; width:80%;'></div>"
    
    $("body").append(thediv)
  });
  $(document).on("click", ".enlarge-overlay",function(){
    
    $(".enlarge-overlay").remove()
    
  });
  
});

  
  
  


