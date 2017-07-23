// Parallax
var backgroundImages = document.querySelectorAll(".js-initial");
var parallaxElements = document.querySelectorAll("[data-parallaxify-range]");

setTimeout(function(){
  backgroundImages.forEach(function(bg){
    bg.classList.remove("js-initial");
  });
}, 200);

setTimeout(function(){
  backgroundImages.forEach(function(bg){
    bg.classList.remove("transition");
    bg.style.transitionDelay = "0ms";
  });

  parallaxElements.forEach(function(bg){
    bg.style.transitionDuration = "0ms";
  });
}, 2000);

$("#js-hero").parallaxify(
  {
    positionProperty: 'transform',
    responsive: true,
    motionType: 'performance',
    mouseMotionType: 'gaussian',
  }
);

$(".js-questions").parallaxify(
  {
    positionProperty: 'transform',
    responsive: true,
    motionType: 'performance',
    mouseMotionType: 'gaussian',
  }
);

// Local Scroll for On-Page Nav
$.localScroll();

// Progressive Image Loading
progressively.init();

// Mobile Nav
$(".js-show-nav").click(function(e){
  $(".js-header").toggleClass("is-revealed");
});