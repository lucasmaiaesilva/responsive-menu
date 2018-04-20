const openMenu = document.querySelector('.icon-menu');
const closeMenu = document.querySelector('.icon-cross');
const menu = document.querySelector('body');

openMenu.addEventListener('click', () => toogleMenu(menu, false));
closeMenu.addEventListener('click', () => toogleMenu(menu, true));

function toogleMenu(menu, closed = true) {
  const className = closed ? 'menu-closed' : 'menu-opened'
  menu.setAttribute('class', className);
}