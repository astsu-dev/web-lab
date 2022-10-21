(() => {
  const header = document.querySelector('.header');
  const menuButton = document.querySelector('.menu-button');
  const body = document.querySelector('body');

  const onMenuButtonClick = (e: TouchEvent) => {
    e.preventDefault();
    header && header.classList.toggle('header_menu-active');
    body && body.classList.toggle('no-scroll');
    menuButton && menuButton.classList.toggle('menu-button_active');
  };

  menuButton && menuButton.addEventListener('click', onMenuButtonClick);
})();
