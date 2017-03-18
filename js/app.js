var windowsize = $(window).width();
showCode();

$(window).resize(function() {
    var windowsize = $(window).width(); // New width on screen re-size
    showCode();
});

function showCode() {
    // square scenario
    if (windowsize >= 840) {
        $('.row1 .code-button').on('click', function() {
            $(this).parent().siblings('.code').insertAfter('.katie-rafferty').show('slow');
        });
        $('.row2 .code-button').on('click', function() {
            $(this).parent().siblings('.code').insertAfter('.hangman').show('slow');
        });
    // all one column scenario
    } else if (windowsize < 840) {
        $('.tic-tac-toe .code-button').on('click', function() {
            $(this).parent().siblings('.code').insertAfter('.tic-tac-toe').show('slow');
        });
        $('.katie-rafferty .code-button').on('click', function() {
            $(this).parent().siblings('.code').insertAfter('.katie-rafferty').show('slow');
        });
        $('.weather .code-button').on('click', function() {
            $(this).parent().siblings('.code').insertAfter('.weather').show('slow');
        });
        $('.hangman .code-button').on('click', function() {
            $(this).parent().siblings('.code').insertAfter('.hangman').show('slow');
        });
    }
}

$('.portfolio').on('click', '.hide-button', function() {
    $('.code').hide('slow');
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
