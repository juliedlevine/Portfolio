// Show and hide code snippets
$('.one .code-button').click(function() {
    $('.one-code').slideToggle().css('float', 'right');
});
$('.two .code-button').click(function() {
    $('.two-code').slideToggle();
});
$('.three .code-button').click(function() {
    $('.three-code').slideToggle().css('float', 'right');
});
$('.four .code-button').click(function() {
    $('.four-code').slideToggle();
});
$('.portfolio').on('click', '.hide-button', function() {
    $('.code').slideUp();
});



// Tooltip plugin
$('.tooltip').tooltipster({
    theme: 'tooltipster-shadow',
    animation: 'grow',
    side: 'bottom'
});



// Change highlighted nav item on scroll
$(window).scroll(function() {
    var navHeight = $('.nav').height(),
        documentHeight = $(document).height(),
        windowHeight = $(window).height(),
        scroll = $(window).scrollTop(),
        about = $('#about').offset().top,
        portfolio = $('#portfolio').offset().top;

    if (scroll >= about - navHeight) {
        $('.menu li').removeClass('selected');
        $('.about_button li').addClass('selected');
    }
    if (scroll >= portfolio - navHeight) {
        $('.menu li').removeClass('selected');
        $('.portfolio_button li').addClass('selected');
    }
    // If at the top of the page, remove all selected classes
    if (scroll === 0) {
        $('.menu li').removeClass('selected');
    }
    // If at bottom of page, add selected class on Contact
    if (scroll + windowHeight === documentHeight) {
        $('.menu li').removeClass('selected');
        $('.contact_button li').addClass('selected');
    }
});



// Contact image button animation
$('.contact img').mouseover(function(){
    $(this).animate({
        padding: '0',
    }, 200);
});
$('.contact img').mouseout(function(){
    $(this).animate({
        padding: '5px',
    }, 200);
});



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
    $('.menu li').removeClass('selected');
    $(this).children().addClass('selected');
    var windowSize = $(window).width();
    if (windowSize <= 540) {
        $('.hamburger-menu').toggle();
    }
});

$(".about_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1500);
    $('.menu li').removeClass('selected');
    $(this).children().addClass('selected');
    var windowSize = $(window).width();
    if (windowSize <= 540) {
        $('.hamburger-menu').toggle();
    }
});

$(".portfolio_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1500);
    $('.menu li').removeClass('selected');
    $(this).children().addClass('selected');

    var windowSize = $(window).width();
    if (windowSize <= 540) {
        $('.hamburger-menu').toggle();
    }
});

$(".logo").click(function() {
    $('.menu li').removeClass('selected');
    $(this).children().addClass('selected');
    $('html, body').animate({
        scrollTop: $("#logo").offset().top
    }, 1500);
});
