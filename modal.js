const populateModal = (index) => {
  document.querySelector('body').classList.add('end-scroll');
  document.querySelector('.project-modal-background').style.display = 'block';

  const projects = [
    {
      projectName: 'Conference Capstone Project',
      canopy: 'MB',
      role: 'Front End Dev',
      year: '2021',
      image: {
        URL: './assets/images/download (4).jpg',
        alt: 'My first project snapshot',
      },
      description:
        'The project is based on an online website for a conference. ',
      technologies: ['html', 'css', 'javascipt','github',],
      liveLink: 'https://mbdesigns1989.github.io/my-capstone-project/',
      githubLink: 'https://github.com/mbdesigns1989/my-capstone-project',
    },
    {
      projectName: 'Multi-Post Stories',
      canopy: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      image: {
        URL: './assets/images/project2.png',
        alt: 'My second project snapshot',
      },
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent. ',
      technologies: ['html', 'css', 'javascipt', 'bootstrap', 'github', 'ruby'],
      liveLink: 'https://mbdesigns1989.github.io/my-portfolio-website/',
      githubLink: 'https://github.com/mbdesigns1989/my-portfolio-website',
    },
    {
      projectName: 'Tonic',
      canopy: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      image: {
        URL: './assets/images/project3.png',
        alt: 'My third project snapshot',
      },
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent. ',
      technologies: ['html', 'css', 'javascipt', 'bootstrap', 'github', 'ruby'],
      liveLink: 'https://mbdesigns1989.github.io/my-portfolio-website/',
      githubLink: 'https://github.com/mbdesigns1989/my-portfolio-website',
    },
    {
      projectName: 'Multi-Post Stories',
      canopy: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      image: {
        URL: './assets/images/project4.png',
        alt: 'My fourth project snapshot',
      },
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odit debitis minus vero excepturi facilis tenetur hic eos, mollitia quidem quia esse quaerat architecto pariatur odio? Iste non commodi consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odit debitis minus vero excepturi facilis tenetur hic eos, mollitia quidem quia esse quaerat architecto pariatur odio? Iste non commodi consequatur.',
      technologies: ['html', 'css', 'javascipt', 'bootstrap', 'github', 'ruby'],
      liveLink: 'https://mbdesigns1989.github.io/my-portfolio-website/',
      githubLink: 'https://github.com/mbdesigns1989/my-portfolio-website',
    },
  ];

  const modalName = document.querySelector('.modal-project-name');
  const modalCanopy = document.querySelector('.project-modal-main .canopy');
  const modalRole = document.querySelector('.project-modal-main .role');
  const modalYear = document.querySelector('.project-modal-main .year');
  const modalImage = document.querySelector('.modal-image');
  const modalDescription = document.querySelector('.modal-project-description');
  const modalTechs = document.querySelector('.modal-techs');
  const modalLiveButtonAnchor = document.querySelector('.live-link a');
  const modalGithubButtonAnchor = document.querySelector('.github-link a');
  const activeProject = projects[index];

  modalName.textContent = activeProject.projectName;
  modalCanopy.textContent = activeProject.canopy;
  modalRole.textContent = activeProject.role;
  modalYear.textContent = activeProject.year;
  modalImage.setAttribute('src', activeProject.image.URL);
  modalImage.setAttribute('alt', activeProject.image.alt);
  modalDescription.textContent = activeProject.description;
  modalTechs.innerHTML = '';

  activeProject.technologies.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    modalTechs.appendChild(li);
    return true;
  });

  modalLiveButtonAnchor.setAttribute('href', activeProject.liveLink);
  modalGithubButtonAnchor.setAttribute('href', activeProject.githubLink);
};

const closeModal = () => {
  document.querySelector('body').classList.remove('end-scroll');
  document.querySelector('.project-modal-background').style.display = 'none';
};

document.querySelector('.project-modal-main').addEventListener('click', (e) => {
  e.stopPropagation();
});

document.querySelector('.close').addEventListener('click', closeModal);
document
  .querySelector('.project-modal-background')
  .addEventListener('click', closeModal);

const allProjectButtons = Array.from(document.querySelectorAll('.pr-btn'));

allProjectButtons.forEach((button, index) => {
  button.addEventListener('click', () => populateModal(index));
  return true;
});