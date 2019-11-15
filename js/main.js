///////////////////////////////////
// NAV menu - hamburger for small screen/mobile
const nav = document.querySelector('.nav__list');
const btnHamburger = document.querySelector('.nav__btn');
const mobileNav = () => {

btnHamburger.addEventListener("click", () => {
  btnHamburger.classList.toggle('btn--active');
  nav.classList.toggle('nav__list__mobile');
});
}
mobileNav();

//////////////////////////////////////
/// Nav menu - Hide menu after click on link "a"
const items = [...document.querySelectorAll('.nav__list--link')];
items.forEach(function(e) {
  e.addEventListener('click', () => {
    nav.classList.remove('nav__list__mobile');
    btnHamburger.classList.toggle('btn--active');
  }, 1000);
});


///////////////////////////////////////////////////////////////////////
//////////////// JQuery Smooth Scroll (Nav)
$('.nav__list--link').on('click', function(e) {
  if(this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
  }
});