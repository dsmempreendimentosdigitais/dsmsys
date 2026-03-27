// ===== HEADER SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
});

nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
  });
});

// ===== INTERSECTION OBSERVER (ANIMAÇÕES) =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');

      // Barra do hero card
      const bar = entry.target.querySelector?.('.bar-fill');
      if (bar) bar.classList.add('animated');

      // Counter animado
      const counters = entry.target.querySelectorAll?.('[data-count]');
      if (counters?.length) {
        counters.forEach(counter => animateCounter(counter));
      }

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[data-animate], [data-animate-delay]').forEach(el => observer.observe(el));

// Observar números separadamente
document.querySelectorAll('.number-item').forEach(el => observer.observe(el));

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'));
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }

  requestAnimationFrame(update);
}

// ===== HERO BAR ANIMATION (trigger on load) =====
window.addEventListener('load', () => {
  setTimeout(() => {
    const bar = document.querySelector('.bar-fill');
    if (bar) bar.classList.add('animated');
  }, 800);
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq__item').forEach(item => {
  const btn = item.querySelector('.faq__question');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    // fecha todos
    document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
    // abre o clicado (se não estava aberto)
    if (!isOpen) item.classList.add('open');
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});
