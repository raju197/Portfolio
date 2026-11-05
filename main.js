/* ========================================================
   RAJU MANDAL — PORTFOLIO JAVASCRIPT
   - Mobile nav toggle
   - Sticky header on scroll
   - Active nav link highlight on scroll
   - Scroll-reveal for sections
   - Animated counting numbers
   - Contact form → mailto handler
   - Footer year auto-update
   ======================================================== */

(function () {
  'use strict';

  /* ---- Helpers ---- */
  const qs  = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ======================================================
     1. FOOTER YEAR
     ====================================================== */
  const yearEl = qs('#footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ======================================================
     2. STICKY HEADER SHADOW
     ====================================================== */
  const header = qs('.site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  /* ======================================================
     3. MOBILE NAV TOGGLE
     ====================================================== */
  const toggle   = qs('#navToggle');
  const navLinks = qs('#navLinks');

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a nav link is clicked
  qsa('.nav-link', navLinks).forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ======================================================
     4. ACTIVE NAV LINK HIGHLIGHT (Intersection Observer)
     ====================================================== */
  const sections = qsa('section[id]');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        qsa('.nav-link').forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(sec => navObserver.observe(sec));

  /* ======================================================
     5. SCROLL-REVEAL ANIMATION
     ====================================================== */
  // Add reveal class to elements we want to animate in
  const revealTargets = qsa([
    '.about-text',
    '.about-stats',
    '.skill-group',
    '.project-card',
    '.timeline-item',
    '.cert-card',
    '.contact-info',
    '.contact-form'
  ].join(', '));

  revealTargets.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger siblings within same parent
    const siblings = qsa('.reveal', el.parentElement);
    const idx = siblings.indexOf(el);
    if (idx > 0 && idx < 4) {
      el.classList.add(`reveal-delay-${idx}`);
    }
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  qsa('.reveal').forEach(el => revealObserver.observe(el));

  /* ======================================================
     6. ANIMATED STAT COUNTERS
     ====================================================== */
  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1400;
    const start = performance.now();

    function update(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const statNumbers = qsa('.stat-number[data-target]');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => statObserver.observe(el));

  /* ======================================================
     7. CONTACT FORM — mailto fallback
     ====================================================== */
  const contactForm = qs('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = (qs('#contactName').value  || '').trim();
      const email   = (qs('#contactEmail').value || '').trim();
      const message = (qs('#contactMessage').value || '').trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields before sending.');
        return;
      }

      const subject = encodeURIComponent(`Portfolio Enquiry from ${name}`);
      const body    = encodeURIComponent(
        `Hi Raju,\n\nMy name is ${name} and my email is ${email}.\n\n${message}\n\nBest,\n${name}`
      );

      // Opens the user's email client with pre-filled message
      window.location.href = `mailto:rajukumarmandal197@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  /* ======================================================
     8. SMOOTH SCROLL POLYFILL (for older Safari)
     ====================================================== */
  qsa('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = qs(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerHeight = header.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

})();
