$(document).ready(function(){
  $(".slider").on("input change", (e) => {
    const sliderPos = e.target.value / 4;
    const sliderPos2 = 2 - (e.target.value * 0.5) / 100;
    // Update the width of the foreground image
    $(e.target).parent().siblings('.im1', this).css('width', `${sliderPos}%`)
    $(e.target).parent().siblings(".onimtext").children(".bf").css("opacity", sliderPos / 50);
    $(e.target).parent().siblings(".onimtext").children(".af").css("opacity", sliderPos2);
  });
})


