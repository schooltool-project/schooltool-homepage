function hasBorderRadius() {
var d = document.createElement("div").style;
if (typeof d.borderRadius !== "undefined") return true;
if (typeof d.WebkitBorderRadius !== "undefined") return true;
if (typeof d.MozBorderRadius !== "undefined") return true;
return false;
};

// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){
  $('#slider').nivoSlider({
    effect: 'fade',
    captionOpacity: .9,
    controlNav: false,
    directionNavHide: false // Only show on hover
     // Universal caption opacity
    
  });

	// your functions go here
	if (hasBorderRadius()) {
  $(".rounded").each(function(){
  var img = $(this).children("img");
  var imgSrc = img.attr("src");
  var imgHeight = img.height();
  var imgWidth = img.width();
  $(this).css("background-image", "url(" + imgSrc + ")")
  .css("background-repeat","no-repeat")
  .css("padding-top", imgHeight + "px");
  img.remove();
  });
  }

});

/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/