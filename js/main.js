(function () {
  const burgerItem = document.querySelector('.burger');
  const menuCloseItem = document.querySelector('.header-nav-close');
  const menuCloseLinks = document.querySelector('.header-list');
  const menu = document.querySelector('.header-nav');

  burgerItem.addEventListener('click', () => {
    menu.classList.add('header-nav-active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header-nav-active');
  });
  menuCloseLinks.addEventListener('click', () => {
    menu.classList.remove('header-nav-active');
  });
}());