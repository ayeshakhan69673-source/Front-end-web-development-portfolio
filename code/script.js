// ---------------------------------------------------------
// Reveal-on-scroll for elements marked [data-reveal]
// ---------------------------------------------------------
(function () {
  const revealEls = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window) || revealEls.length === 0) {
    // Fallback: just show everything immediately
    revealEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
})();

// ---------------------------------------------------------
// Hero entrance: stagger the reveal of hero elements on load
// ---------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  const heroEls = document.querySelectorAll('.hero [data-reveal]');
  heroEls.forEach((el, i) => {
    setTimeout(() => el.classList.add('is-visible'), 150 + i * 140);
  });
});

// ---------------------------------------------------------
// Active nav link highlight while scrolling (subtle touch)
// ---------------------------------------------------------
(function () {
  const links = document.querySelectorAll('.nav__links a');
  const sections = Array.from(links)
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (sections.length === 0 || !('IntersectionObserver' in window)) return;

  const map = new Map();
  links.forEach((link) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) map.set(target, link);
  });

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = map.get(entry.target);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach((l) => l.style.color = '');
          link.style.color = '#E0A64A';
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );

  sections.forEach((section) => navObserver.observe(section));
})();