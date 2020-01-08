// import simpleParallax from 'simple-parallax-js';
$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  $('a').toggleClass('scrolled', $(this).scrollTop() > 50);
});


//Making navbar transparent if on top, otherwise fill with color/
document.getElementById('bigBar') = bigBar;

function fillNav() {
  if(bigBar.style.backgroundColor = 'transparent') {
    bigBar.style.backgroundColor = 'white';
} else if(bigBar.style.backgroundColor = 'white') {
    bigBar.style.backgroundColor = 'transparent';
}
};

const background = document.getElementById("chabrowski");
new simpleParallax(background)