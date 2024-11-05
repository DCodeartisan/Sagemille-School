// Toggle navbar menu on mobile
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
