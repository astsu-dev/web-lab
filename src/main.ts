(() => {
  const menu = document.querySelector('.menu').cloneNode(true);
  const menuButton = document.querySelector('.menu-button');
  const menuPopup = document.querySelector('.menu-popup');

  menuPopup.appendChild(menu);

  const onMenuButtonClick = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    menuPopup.classList.toggle('none');
    menu.classList.toggle('none');
  };

  menuButton.addEventListener('click', onMenuButtonClick);
})();
