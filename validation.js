const form = document.querySelector('.contact-mb');
const email = document.querySelector('.email');
const msgBox = document.querySelector('.error');

email.addEventListener('focus', () => {
  email.style.outline = 'none';
});

msgBox.textContent = 'Please make sure the email is all lower case';
msgBox.style.color = '#fff';

 
