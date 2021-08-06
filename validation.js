const form = document.querySelector('.contact-mb');
const email = document.querySelector('.hello');
const msgBox = document.querySelector('.error');

email.addEventListener('focus', () => {
  email.style.outline = 'none';
});

msgBox.textContent = 'Please make sure the email is all lower case';
msgBox.style.color = '#fff';

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    msgBox.style.opacity = '1';
    email.style.outline = 'solid rgba(255, 97, 99, 1)';
    setTimeout(() => {
      msgBox.style.opacity = '0';
    }, 5000);
  }
});
