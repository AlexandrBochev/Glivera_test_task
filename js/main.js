(function () {
  const burgerItem = document.querySelector('.burger');
  const menuCloseItem = document.querySelector('.header-nav-close');
  const menuCloseLinks = document.querySelector('.header-list');
  const menu = document.querySelector('.header-nav');
  const header = document.querySelector('.header');
  const warningClose = document.querySelector('.close');

  burgerItem.addEventListener('click', () => {
    menu.classList.add('header-nav-active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header-nav-active');
  });
  menuCloseLinks.addEventListener('click', () => {
    menu.classList.remove('header-nav-active');
  });
  warningClose.addEventListener('click', () => {
    header.classList.add('header-active');
  });
}());