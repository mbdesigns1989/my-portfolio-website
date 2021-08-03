const body = document.querySelector('body');
const mobileMenu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-icon');
const firstLMenuItem = document.querySelector('.menu-item');
const div = document.createElement('div');
const i = document.createElement('i');

const removeMobileMenu = () => {
  body.classList.remove('end-scroll');
  mobileMenu.classList.add('menu');
  mobileMenu.classList.remove('mobile-menu-js');
};

const showMobileMenu = () => {
  body.classList.add('end-scroll');
  div.classList.add('close-container');
  i.classList.add('fal', 'fa-times');
  div.appendChild(i);
  mobileMenu.insertBefore(div, firstLMenuItem);
  mobileMenu.classList.remove('menu');
  mobileMenu.classList.add('mobile-menu-js');
};

menuButton.addEventListener('click', showMobileMenu);
mobileMenu.addEventListener('click', removeMobileMenu);