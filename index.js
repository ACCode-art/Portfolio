const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');

const projectsButton = document.querySelector('.projects__button');

// menu navigation

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('display-flex');
});
