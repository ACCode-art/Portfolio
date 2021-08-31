const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');

const projectsButton = document.querySelector('.projects__button');

const technologies__container = document.querySelector(
  '.technologies__container'
);

const homePage = document.querySelector('.homePage');

// menu navigation

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('display-flex');
});

homePage.addEventListener('click', (e) => {
  let target = e.target.textContent;
  if (target === 'Technologies') {
    technologies__container.classList.toggle('display-flex');
  }
});
