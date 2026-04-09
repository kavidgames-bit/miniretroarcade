/* ============================================================
   MINI RETRO ARCADE — Lógica principal
   ============================================================ */

// ─── NAVBAR SCROLL ──────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── HAMBURGER MENU ─────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ─── PIXEL FIELD (hero) ─────────────────────────────────────
function createPixels() {
  const field = document.querySelector('.pixel-field');
  if (!field) return;
  const colors = ['#F97316', '#FBBF24', '#DC2626', '#ffffff'];
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'pixel';
    const size = Math.random() * 6 + 4;
    p.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 12 + 8}s;
      animation-delay: ${Math.random() * -15}s;
      box-shadow: 0 0 6px currentColor;
    `;
    field.appendChild(p);
  }
}
createPixels();

// ─── COUNTER ANIMATION ──────────────────────────────────────
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step  = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 25);
  });
}

// Trigger counters when About section is visible
const aboutSection = document.getElementById('about');
if (aboutSection) {
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
  }, { threshold: 0.3 });
  obs.observe(aboutSection);
}

// ─── TOAST ──────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─── CONTACT FORM → WHATSAPP ────────────────────────────────
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name    = document.getElementById('cf-name').value.trim();
  const phone   = document.getElementById('cf-phone').value.trim();
  const subject = document.getElementById('cf-subject').value;
  const msg     = document.getElementById('cf-msg').value.trim();

  const text = `👋 *Consulta desde el sitio web*\n\n` +
    `👤 *Nombre:* ${name}\n` +
    `📞 *Teléfono:* ${phone || 'no especificado'}\n` +
    `📋 *Asunto:* ${subject}\n\n` +
    `💬 *Mensaje:*\n${msg}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
});

// ─── ACTIVE NAV ON SCROLL ───────────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--orange)' : '';
  });
}, { passive: true });
