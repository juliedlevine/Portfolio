# Portfolio Website
---
## [Live Demo](http://juliemdyer.com)

## What It Is
Website showcasing my recent projects.

## Languages used
* HTML
* CSS
* jQuery


## Challenges
### Replicating hover effect on touch devices
I wanted to re-create the hover effect as seen on desktops when on a mobile device. Meaning when the user clicked a project image, the overlay would be seen. When they click again the overlay is hidden.

The first hurdle with this was figuring out a way to detect when the user is on a mobile device with touch. The Modernizr feature detection library helped me do this. I downloaded the touch events build from Modernizr and linked the  JavaScript file in my index.html document.

What this does is add a "touchevents" class to the html tag when the user is on a touch device. I could then use the presence of this class to effectively toggle the overlay when each project is clicked. A matching CSS rule (.project.hover .overlay) must also be added to the existing hover CSS rule.
```JavaScript
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
```
![alt text](https://github.com/juliemdyer/Portfolio/blob/master/img/touch_screenshot.png)

### Adding hamburger menu without Bootstrap
I typically have a lot of trouble customizing Bootstrap's navigation menus and since this was a fairly simple navigation bar without a lot of bells and whistles I wanted to figure out how to make it responsive using my own CSS and jQuery.

The first thing I did was a media query to hide the ul navigation menu and show the hamburger image. Then I tried to transform the ul navigation menu to into a dropdown menu when the hamburger is clicked. This is where I hit a lot of trouble. I was having to change so many CSS rules and I couldn't get the drop down menu to look the way I wanted to.

I ended up creating a new div for the dropdown menu. On larger screens its hidden altogether, and on small screens it is toggled using jQuery when the hamburger is clicked. This made it very easy to style along with super simple jQuery. Although I will admit for a larger project this is probably not the way to go.

HTML for hamburger drop down menu. The hamburger icon image is placed inside the original nav div.
```HTML
<div class="hamburger-menu">
    <ul>
        <a href="#about" class="about_button"><li>About Me</li></a>
        <a href="#portfolio" class="portfolio_button"><li>Portfolio</li></a>
        <a href="#contact" class="contact_button"><li>Contact</li></a>
    </ul>
</div>
```

CSS Styles for hamburger icon and drop down menu.
```CSS
.hamburger-icon {
	display: none;
}
.hamburger-menu {
	display: none;
	position: fixed;
	top: 75px;
	z-index: 3000;
	width: 100%;
}
.hamburger-menu ul {
	list-style-type: none;
	background-color: white;
	padding: 0;
	margin: 0;
	opacity: 0.9;
	text-align: center;
}
.hamburger-menu li {
	color: gray;
	padding: 15px;
}
.hamburger-menu a {
	font-family: 'Blanc-Medium';
	text-decoration: none;
	text-transform: uppercase;
}
```

jQuery for showing and hiding the drop down menu.
```JavaScript
// Show and hide hamburger menu
$('.hamburger-icon').click(function(){
    $('.hamburger-menu').toggle();
});
```
![alt text](https://github.com/juliemdyer/Portfolio/blob/master/img/hamburger_screenshot.png)
