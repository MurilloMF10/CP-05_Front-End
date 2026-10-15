const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
let previousScroll = 0;

function updateHeader() {
  const current = window.scrollY;
  header.classList.toggle('scrolled', current > 24);
  if (current > 240 && current > previousScroll + 3) header.classList.add('hidden');
  if (current < previousScroll - 3 || current < 100) header.classList.remove('hidden');
  previousScroll = current;
}
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  navLinks.classList.toggle('open', !isOpen);
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
}));

document.querySelectorAll('.faq-list details').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) document.querySelectorAll('.faq-list details').forEach(other => {
      if (other !== item) other.open = false;
    });
  });
});

const quoteCards = [...document.querySelectorAll('.quote-card')];
const quoteCount = document.querySelector('#testimonial-count');
let quoteIndex = 0;
function showQuote(nextIndex) {
  quoteIndex = (nextIndex + quoteCards.length) % quoteCards.length;
  quoteCards.forEach((card, index) => card.classList.toggle('active', index === quoteIndex));
  quoteCount.textContent = String(quoteIndex + 1).padStart(2, '0');
}
document.querySelector('#testimonial-prev').addEventListener('click', () => showQuote(quoteIndex - 1));
document.querySelector('#testimonial-next').addEventListener('click', () => showQuote(quoteIndex + 1));
