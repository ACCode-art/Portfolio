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
    img: '../src/sundown.png',
    blogDate: '30/08/2021',
    description:
      'Today, I worked on refactoring the "check level" function for the game I am working on called "Pixelliegence". Instead of creating a long switch statement that would check the players experience, compare that against level breakpoints and change the player level accordingly, instead, I made a small function that compares the level of the player to its index in the level array, and if the experience is met increases the players level. In doing this, it made the code much simpler to read and significantly shorter. Below is a picture of some concept art for the game.',
  },
  {
    blogTitle: 'Blog 2',
    img: '../src/blog-2.gif',
    blogDate: '3/09/2021',
    description:
      'I jumped into Phaser.js for the first time. After watching a few tutorials, I made this rough draft using game assets I created in photoshop.',
  },
  {
    blogTitle: 'Blog 3',
    img: '../src/first-kaboom-game.gif',
    blogDate: '9/09/2021',
    description: `After spending some time on phaser.js, I came across another Javascript library called 'Kaboom', I enjoyed using this more than Phaser.js and will be using it to create my game for the 'vimjam2' competition as seen on itch.io. Below is an example of the game I made today following a tutorial to help me understand Kaboom`,
  },
  {
    blogTitle: 'Blog 4',
    img: '../src/vue-pokemon.png',
    blogDate: '23/09/2021',
    description: `Having heard good things about Vue.js. I decided to use my pokemon card API to create a simple site that allows the user see cards from different sets. The site can be seen here https://vue-pokemon-site.netlify.app/. I have also made the same website in vanilla JS and tailwind, which can be viewed here https://pokemon-site-example.netlify.app/ `,
  },
  {
    blogTitle: 'Blog 5',
    img: '../src/vue-pokemon.png',
    blogDate: '27/09/2021',
    description: `After making my Pokémon app in Vue.js, I wanted to learn more about vuex (Vue's state management pattern and library). After reading the docs and watching a few tutorials, I began to implement vuex into the app so it can read and manipulate the state from any component. I am hoping to develop this app further so it can be used as a deck builder and tracker in the future.`,
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

    blog__container.insertAdjacentHTML('afterbegin', HTML);
  }
}

getALlBlogs();
