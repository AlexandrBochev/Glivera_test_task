(function () {
  const burgerItem = document.querySelector('.burger');
  const menuCloseItem = document.querySelector('.header_nav_close');
  const menuCloseLinks = document.querySelector('.header_list');
  const menu = document.querySelector('.header_nav');
  const header = document.querySelector('.header');
  const warningClose = document.querySelector('.close');

  burgerItem.addEventListener('click', () => {
    menu.classList.add('header_nav_active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header_nav_active');
  });
  menuCloseLinks.addEventListener('click', () => {
    menu.classList.remove('header_nav_active');
  });
  warningClose.addEventListener('click', () => {
    header.classList.add('header_active');
  });
}());