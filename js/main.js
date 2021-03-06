$(function() {
 $("#slides").slidesjs({
   width: 300,
   height: 300,
   play: {
    active: false,
      // [boolean] Generate the play and stop buttons.
      // You cannot use your own buttons. Sorry.
    effect: "slide",
      // [string] Can be either "slide" or "fade".
    interval: 5000,
      // [number] Time spent on each slide in milliseconds.
    auto: true,
      // [boolean] Start playing the slideshow on load.
    swap: true,
      // [boolean] show/hide stop and play buttons
    pauseOnHover: false,
      // [boolean] pause a playing slideshow on hover
    restartDelay: 2500
      // [number] restart delay on inactive slideshow
   },
   navigation: {active: false},
   pagination: {active: false}
 });
});
