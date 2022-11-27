$(document).ready(function(){
  $(".slider").on("input change", (e) => {
        const sliderPos = e.target.value / 4;
        const sliderPos2 = 2 - (e.target.value * 0.5) / 100;
        // Update the width of the foreground image
        $(this).find('.im1').css('width', `${sliderPos}%`)
        $(this).find(".sliderThumb").siblings(".onimtext").children(".bf").css("opacity", sliderPos / 50);
        $(this).find(".sliderThumb").siblings(".onimtext").children(".af").css("opacity", sliderPos2);
    });
  
    $("#slide2").on("input change", (e) => {
        const sliderPos = e.target.value / 4;
        const sliderPos2 = 2 - (e.target.value * 0.5) / 100;
        // Update the width of the foreground image
        $('#im3').css('width', `${sliderPos}%`)
        $("#slide2").parent().siblings(".onimtext").children(".bf").css("opacity", sliderPos / 50);
        $("#slide2").parent().siblings(".onimtext").children(".af").css("opacity", sliderPos2);



    });
    $("#slide3").on("input change", (e) => {
        const sliderPos = e.target.value / 4;
        const sliderPos2 = 2 - (e.target.value * 0.5) / 100;
        // Update the width of the foreground image
        $('#im5').css('width', `${sliderPos}%`)
        $("#slide3").parent().siblings(".onimtext").children(".bf").css("opacity", sliderPos / 50);
        $("#slide3").parent().siblings(".onimtext").children(".af").css("opacity", sliderPos2);

    });
})


