function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  var tab = document.getElementById('tab-' + id);
  if (tab) tab.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Gestion du thème clair/sombre
(function () {
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', d);
  t && t.addEventListener('click', () => {
    d = d === 'dark' ? 'light' : 'dark';
    r.setAttribute('data-theme', d);
    t.innerHTML = d === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  });
})();

// Burger menu
(function () {
  var hb = document.getElementById('nav-hamburger');
  var nl = document.querySelector('.nav-links');
  if (hb && nl) {
    hb.addEventListener('click', function () {
      hb.classList.toggle('open');
      nl.classList.toggle('open');
    });
    // Fermeture au clic sur un lien de nav
    nl.querySelectorAll('.nav-link').forEach(function (l) {
      l.addEventListener('click', function () {
        hb.classList.remove('open');
        nl.classList.remove('open');
      });
    });
  }
})();

// Animations au scroll (fade-in-up)
(function () {
  var elements = document.querySelectorAll('.fade-in-up');
  if (!elements.length || !('IntersectionObserver' in window)) {
    // Fallback : tout rendre visible immédiatement
    elements.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  elements.forEach(function (el) { observer.observe(el); });
})();
