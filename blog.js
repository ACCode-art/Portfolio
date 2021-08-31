const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');

const blog = document.querySelector('.blog');
const blogTitle = document.querySelector('.blog__title');
const blogDate = document.querySelector('.blog__date');
const blogText = document.querySelector('.blog__text');
const blog__img = document.querySelector('.blog__img');

const blog__container = document.querySelector('.blog__container');

// menu navigation

const object = [
  {
    blogTitle: 'Blog 1',
    img: 'https://images.pexels.com/photos/5210001/pexels-photo-5210001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    blogDate: '30/08/2021',
    description:
      'Today, I worked on refactoring the level breakpoints for the game I am working on called "pixelliegence". Instead of creating a long swtich statement which checks the save state and then simply changes the level of the player each time the function is run, I made a small function that compares the level of the player to its index in the level array. In doing this it made the code much simplier to read and around 150 lines shorter.',
  },
];

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('display-flex');
});

blog__container.addEventListener('click', (e) => {
  const closestSmallContainer = e.target.closest('.blog__small');
  const date =
    closestSmallContainer.querySelector('.blog__smallDate').textContent;

  const getBlogInformation = getBlog(date);

  showExpandedBlog(getBlogInformation);
});

blog.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'blog') {
    blog.classList.toggle('display-flex');
  }
});

function showExpandedBlog(info) {
  blog.classList.toggle('display-flex');
  blogDate.textContent = info.blogDate;
  blogTitle.textContent = info.blogTitle;
  blogText.textContent = info.description;
  blog__img.src = info.img;
}

blog.addEventListener('click', (e) => {
  let target = e.target.textContent;

  if (target === 'Close') {
    blog.classList.toggle('display-flex');
  }
});

function getBlog(date) {
  for (let i = 0; i < object.length; i++) {
    const element = object[i];
    const elementDate = object[i].blogDate;

    if (date === elementDate) {
      return element;
    }
  }
}

function getALlBlogs() {
  for (let i = 0; i < object.length; i++) {
    const element = object[i];

    const HTML = `<div class="blog__small">
    <div class="blog__smallTitle">${element.blogTitle}</div>
    <div class="blog__smallDate">${element.blogDate}</div>

    <div class="blog__smallDescription">
      ${element.description.slice(0, 100)}...
    </div>
  </div>`;

    blog__container.insertAdjacentHTML('beforeend', HTML);
  }
}

getALlBlogs();
