const populateModal = (index) => {
  document.querySelector('body').classList.add('end-scroll');
  document.querySelector('.project-modal-background').style.display = 'block';

  const projects = [
    {
      projectName: 'Tonic',
      canopy: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      image: {
        URL: './assets/images/project1.png',
        alt: 'My first project snapshot',
      },
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent. ',
      technologies: ['html', 'css', 'javascipt', 'bootstrap', 'github', 'ruby'],
      liveLink: 'https://mbdesigns1989.github.io/my-portfolio-website/',
      githubLink: 'https://github.com/mbdesigns1989/my-portfolio-website',
    },
   
