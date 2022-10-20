$(document).ready(function(){
  const picarr = ["fng/fng7.jpg", "fng/fng2.jpg", "fng/fng3.jpg", "fng/fng1.jpg",
                  "fng/fng6.jpg", "fng/fng4.jpg",];
  
  let currentPic = 0;
  let maxL = picarr.length-1;
  $(".pic-b").attr("src", picarr[maxL]);
  $(".pic-a").attr("src", picarr[currentPic+1]);
  $(".main-pic").attr("src", picarr[currentPic]);

  $(document).on("click", ".pic-b",function(){

    $(".pic-container-a").animate({left: '1%', }, 100);
    $(".pic-container-a").addClass("pic-container-b");
    $(".pic-container-a").removeClass("pic-container-a");
    $(".pic-container-b").children().addClass("pic-b");
    $(".pic-container-b").children().removeClass("pic-a");

    $(".pic-container").animate({
      width:'400px',
      height:'400px',
      left: '75%',
      top:'100px',
    }, 100);
    $(".pic-container").addClass("pic-container-a");
    $(".pic-container").removeClass("pic-container");
    $(".pic-container-a").children().animate({height:'400px',},200);
    $(".pic-container-a").children().addClass("pic-a");
    $(".pic-container-a").children().removeClass("main-pic");
     
    $(this).parent().animate({
      width:'800px',
      height:'600px',
      left: '50%',
      top:'0px',
      transform: 'translate(-50%)',
    }, 200);
    $(this).parent().addClass("pic-container");
    $(this).parent().removeClass("pic-container-b");
    $(this).animate({height:'600px',},200);
    $(this).addClass("main-pic");
    $(this).removeClass("pic-b");
    
    currentPic -= 1;
    if(currentPic < 0){currentPic=maxL};
    let a = currentPic + 1;
    if(a>maxL){a=0};
    let b = currentPic - 1;
    if(b<0){b=maxL};
    $(".pic-b").attr("src", picarr[b]);
    $(".pic-a").attr("src", picarr[a]);
    $(".main-pic").attr("src", picarr[currentPic]);
  });

  $(document).on("click", ".pic-a",function(){
    $(this).parent().css("z-index", 100);
    $(this).css("z-index", 1000);
    $(".pic-container-b").animate({left: '75%', }, 200);
    $(".pic-container-b").css("z-index", -100);
    $(".pic-container-b").addClass("pic-container-a");
    $(".pic-container-b").removeClass("pic-container-b");
    $(".pic-container-a").children().addClass("pic-a");
    $(".pic-container-a").children().removeClass("pic-b");

    $(".pic-container").animate({
      width:'400px',
      height:'400px',
      left: '1%',
      top:'100px',
    }, 100);
    $(".pic-container").addClass("pic-container-b");
    $(".pic-container").removeClass("pic-container");
    $(".pic-container-b").children().animate({height:'400px',},200);
    $(".pic-container-b").children().addClass("pic-b");
    $(".pic-container-b").children().removeClass("main-pic");
     
    $(this).parent().animate({
      width:'800px',
      height:'600px',
      left: '50%',
      top:'0px',
      transform: 'translate(-50%)',
    }, 200);
    $(this).parent().addClass("pic-container");
    $(this).parent().removeClass("pic-container-a");
    $(this).animate({height:'600px',},200);
    $(this).addClass("main-pic");
    $(this).removeClass("pic-a");
    $(".pic-container-a").css("z-index", 0);
    currentPic += 1;
    if(currentPic>maxL){currentPic=0}
    let a = currentPic + 1;
    if(a>maxL){a=0};
    let b = currentPic - 1;
    if(b<0){b = maxL};
     
    $(".pic-b").attr("src", picarr[b]);
    $(".pic-a").attr("src", picarr[a]);
    $(".main-pic").attr("src", picarr[currentPic]);
    
  });
  



  
  
});