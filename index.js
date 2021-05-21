// selectors

const mainContainer = document.querySelector('.mainContainer');

const projectInformation = [
  {
    title: 'Youtube (Desktop-Clone)',
    desc: "ou don't know me son. Suffering is a test. That’s all it is. Suffering is the true test of life. The most important conversations you’ll ever have are the ones you’ll have with yourself. You wake up with them",
    img: './src/youtube-desktop-clone.jpg',
    github: 'https://github.com/ACCode-art/youtube-desktop-clone',
    live: 'https://youtube-desktop-clone.netlify.app/',
  },
  {
    title: 'Sounds of Serenity (Beta)',
    desc: "ou don't know me son. Suffering is a test. That’s all it is. Suffering is the true test of life. The most important conversations you’ll ever have are the ones you’ll have with yourself. You wake up with them",
    img: './src/sounds-of-serenity.jpg',
    github: 'https://github.com/ACCode-art/Sounds-Of-Serenity',
    live: 'https://soundsofserenity.netlify.app/',
  },
  {
    title: 'M[]vieData',
    desc: "ou don't know me son. Suffering is a test. That’s all it is. Suffering is the true test of life. The most important conversations you’ll ever have are the ones you’ll have with yourself. You wake up with them",
    img: './src/movie-data.jpg',
    github: 'https://github.com/ACCode-art/movie-database',
    live: 'https://movie-app-243e1.web.app/netflix',
  },
  {
    title: 'GothamNFT (Desktop App)',
    desc: "ou don't know me son. Suffering is a test. That’s all it is. Suffering is the true test of life. The most important conversations you’ll ever have are the ones you’ll have with yourself. You wake up with them",
    img: './src/gotham-nft.jpg',
    github: 'https://github.com/ACCode-art/GothamNFT',
    live: 'https://gothamnft.netlify.app/',
  },
];

projectInformation.forEach((element) => {
  const { title, desc, img, github, live } = element;

  const HTML = `<div
  class="project"
  style="background-image: url(${img})"
  loop
>
  <div class="project__information">
    <h2 class="project__title">${title}</h2>
    <p class="project__desc">
  ${desc}
    </p>
    <div class="project__links">
      <a href=${github} target="_blank">GitHub</a>
      <a
        href=${live}
        target="_blank"
        >live</a
      >
    </div>
  </div>
</div>`;

  mainContainer.insertAdjacentHTML('beforeend', HTML);
});
