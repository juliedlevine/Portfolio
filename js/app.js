// Add sticky navbar on scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.nav').addClass("sticky");
    } else {
        $('.nav').removeClass("sticky");
    }
});


// Show and hide hamburger menu
$('.hamburger-icon').click(function(){
    $('.hamburger-menu').toggle();
});



// If on touch, toggle overlay when project is clicked
if (Modernizr.touchevents){
    // When image is clicked on touch device, add hover class (show overlay)
    $('.project img').on('click', function(event){
        event.preventDefault();
        $(this).parent('.project').addClass('hover');
    });
    // When overlay is clicked on touch device, remove hover class (hide overlay)
    $('.project .overlay').on('click', function(){
        $(this).parent('.project').removeClass('hover');
    });
}



// Transition to different parts of page
$(".contact_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1500);
    var windowSize = $(window).width();
    if (windowSize <= 540) {
        $('.hamburger-menu').toggle();
    }
});

$(".about_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1500);
    var windowSize = $(window).width();
    if (windowSize <= 540) {
        $('.hamburger-menu').toggle();
    }
});

$(".portfolio_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1500);
    var windowSize = $(window).width();
    if (windowSize <= 540) {
        $('.hamburger-menu').toggle();
    }
});

$(".logo").click(function() {
    $('html, body').animate({
        scrollTop: $("#logo").offset().top
    }, 1500);
});
