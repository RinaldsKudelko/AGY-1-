$(document).ready(function(){
  console.log("enlarge activated")
  var id = 1
  
  $(".enlarge").each(function(){
    $(this).attr("id", id);
    id+=1;    
  });
  
  $(".enlarge").on("click", function(){
    let theimg = $(this).attr("src")
    console.log($(this).attr("id"))
    var a = $(this).attr("id")
    var nid=id-1
    let thediv = "<div class = 'enlarge-overlay' style='background-color:rgba(0,0,0,0.9); position:fixed; top:0px; left:0px; width:100%; height:100vh; z-index:1000; min-height: 100vh; min-height: -moz-available; min-height: -webkit-fill-available; min-height: fill-available;'><img class='enlarge-img' src='" + theimg + "' style='position:absolute; left:50%; transform:translate(-50%, -50%); top:50%; width:80%;'><p style='position:absolute;bottom:150px; color:white;left:50%;transform:translate(-50%);'>"+ a + "/" + nid +"</p><div class='enlarge-l-arrow'><p class='enlarge-l-arrow-p'><</p></div><div class='enlarge-r-arrow'><p class='enlarge-r-arrow-p'>></p></div>"
    
    $("body").append(thediv)
  });
  
  $(document).on("click", ".enlarge-overlay",function(){ 
    $(".enlarge-overlay").remove()
  });
  $(document).on("click", ".enlarge-r-arrow", function(){
    console.log("test")
  });

  
  




  
});


  
  
  


