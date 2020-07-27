$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a.single-category").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Owl
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    navText: [
        "<i class='fa fa-caret-left'></i>",
         "<i class='fa fa-caret-right'></i>"
         ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
          items: 1
         },
         600: {
          items: 3
         },
         1200: {
          items: 4
         }
         }
         });
    