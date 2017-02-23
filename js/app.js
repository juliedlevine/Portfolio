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
