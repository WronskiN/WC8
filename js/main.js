///////////////////////////////////
// NAV menu - hamburger for small screen/mobile
const mobileNav = () => {
const btnHamburger = document.querySelector('.nav__btn');
const nav = document.querySelector('.nav__list');

btnHamburger.addEventListener("click", () => {
  btnHamburger.classList.toggle('btn--active');
  nav.classList.toggle('nav__list__mobile');
});
}
mobileNav();
