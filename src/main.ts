const registerPopup = (selector: string) => {
  const popup = document.querySelector(`${selector}`);
  const overlay = document.querySelector(`${selector} .popup__overlay`);
  const closeButton = document.querySelector(
    `${selector} .popup__close-button`
  );
  const openButtons = document.querySelectorAll(`${selector}-open-button`);

  const togglePopup = () => {
    popup?.classList.toggle('popup_active');
  };

  [overlay, closeButton, ...Array.from(openButtons)].forEach(toggler =>
    toggler?.addEventListener('click', togglePopup)
  );
};

const registerMenu = () => {
  const header = document.querySelector('.header');
  const menuButton = document.querySelector('.menu-button');
  const body = document.querySelector('body');

  const onMenuButtonClick = (e: Event) => {
    e.preventDefault();
    header?.classList.toggle('header_menu-active');
    body?.classList.toggle('no-scroll');
    menuButton?.classList.toggle('menu-button_active');
  };

  menuButton?.addEventListener('click', onMenuButtonClick);
};

(() => {
  registerMenu();
  registerPopup('.form-popup');
})();
