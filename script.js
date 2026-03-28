const toggleButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const yearTarget = document.querySelector('#year');

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}
