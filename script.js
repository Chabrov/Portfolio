$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  $('a').toggleClass('scrolled', $(this).scrollTop() > 50);
});



document.getElementById('bigBar') = bigBar;

function fillNav() {
  if(bigBar.style.backgroundColor = 'transparent') {
    bigBar.style.backgroundColor = '#0D0D0D';
} else if(bigBar.style.backgroundColor = '#0D0D0D') {
    bigBar.style.backgroundColor = 'transparent';
}
}