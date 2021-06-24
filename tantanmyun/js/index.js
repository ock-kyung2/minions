$(window).scroll(function () {
  if (
    $(window).scrollTop() >= 55 &&
    $("#in-header").hasClass("fixed") == false
  ) {
    $("#in-header").addClass("fixed");
    $("#logo").addClass("fixed");
    console.log("menu addClass");
  } else if (
    $(window).scrollTop() < 55 &&
    $("#in-header").hasClass("fixed") == true
  ) {
    $("#in-header").removeClass("fixed");
    $("#logo").removeClass("fixed");
    console.log("menu removeClass");
  }
});

$(window).ready(function(){

})