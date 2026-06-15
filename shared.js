/* Shared nav + footer injected on every page */
(function () {
  var p = window.location.pathname;
  var inPolicies = p.indexOf('/policies/') !== -1;
  var r = inPolicies ? '../' : '';

  var currentPage = p.split('/').pop() || 'index.html';
  function active(page) { return currentPage === page ? ' class="active"' : ''; }

  /* ── NAV ── */
  document.getElementById('nav-placeholder').innerHTML = [
    '<nav>',
    '  <div class="container">',
    '    <div class="nav-in">',
    '      <a href="' + r + 'index.html" class="logo">Garage<span>Clean</span></a>',
    '      <ul class="nav-links">',
    '        <li><a href="' + r + 'index.html"' + active('index.html') + '>Home</a></li>',
    '        <li><a href="' + r + 'about.html"' + active('about.html') + '>About Us</a></li>',
    '        <li><a href="' + r + 'services.html"' + active('services.html') + '>Services</a></li>',
    '        <li><a href="' + r + 'packages.html"' + active('packages.html') + '>Packages</a></li>',
    '        <li><a href="' + r + 'faq.html"' + active('faq.html') + '>FAQ</a></li>',
    '        <li><a href="' + r + 'contact.html"' + active('contact.html') + '>Contact</a></li>',
    '      </ul>',
    '      <a href="' + r + 'contact.html" class="btn btn-primary nav-cta">Get a Quote</a>',
    '      <button class="hamburger" aria-label="Open menu">',
    '        <svg width="22" height="16" viewBox="0 0 22 16" fill="none">',
    '          <rect width="22" height="2" rx="1" fill="#0B2A4A"/>',
    '          <rect y="7" width="22" height="2" rx="1" fill="#0B2A4A"/>',
    '          <rect y="14" width="22" height="2" rx="1" fill="#0B2A4A"/>',
    '        </svg>',
    '      </button>',
    '    </div>',
    '  </div>',
    '</nav>'
  ].join('\n');

  /* ── FOOTER ── */
  document.getElementById('footer-placeholder').innerHTML = [
    '<footer>',
    '  <div class="container">',
    '    <div class="foot-grid">',
    '      <div>',
    '        <div class="foot-logo">Garage<span>Clean</span></div>',
    '        <p class="foot-desc">Full garage cleanout and deep-clean service for North Vancouver, West Vancouver, and Burnaby homeowners.</p>',
    '        <div class="foot-contact">',
    '          <a href="tel:+16045550100"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 2h3l1.5 3.5-2 1.5a9.5 9.5 0 004.5 4.5l1.5-2L15 11v3a2 2 0 01-2 2A14 14 0 012 4a2 2 0 012-2z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>(604) 555-0100</a>',
    '          <a href="mailto:hello@garageclean.ca"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M1 5l7 5 7-5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>hello@garageclean.ca</a>',
    '        </div>',
    '      </div>',
    '      <div class="foot-col">',
    '        <h4>Quick Links</h4>',
    '        <ul class="foot-links">',
    '          <li><a href="' + r + 'index.html">Home</a></li>',
    '          <li><a href="' + r + 'about.html">About Us</a></li>',
    '          <li><a href="' + r + 'services.html">Services</a></li>',
    '          <li><a href="' + r + 'packages.html">Packages</a></li>',
    '          <li><a href="' + r + 'faq.html">FAQ</a></li>',
    '          <li><a href="' + r + 'contact.html">Contact Us</a></li>',
    '        </ul>',
    '      </div>',
    '      <div class="foot-col">',
    '        <h4>Useful Links</h4>',
    '        <ul class="foot-links">',
    '          <li><a href="' + r + 'policies/booking-cancellation.html">Booking &amp; Cancellation</a></li>',
    '          <li><a href="' + r + 'policies/scope-of-work.html">Scope of Work</a></li>',
    '          <li><a href="' + r + 'policies/privacy.html">Privacy Policy</a></li>',
    '          <li><a href="' + r + 'policies/payment.html">Payment Policy</a></li>',
    '          <li><a href="' + r + 'policies/damage.html">Damage Policy</a></li>',
    '          <li><a href="' + r + 'policies/safety.html">Safety Policy</a></li>',
    '        </ul>',
    '      </div>',
    '      <div class="foot-col">',
    '        <h4>Areas Served</h4>',
    '        <ul class="foot-links">',
    '          <li><a href="' + r + 'contact.html">North Vancouver</a></li>',
    '          <li><a href="' + r + 'contact.html">West Vancouver</a></li>',
    '          <li><a href="' + r + 'contact.html">Burnaby</a></li>',
    '        </ul>',
    '      </div>',
    '    </div>',
    '    <div class="foot-bottom">',
    '      <span class="foot-copy">&copy; 2026 GarageClean. All rights reserved.</span>',
    '      <span class="foot-copy">Fully insured &middot; Locally owned</span>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  /* ── Fade-in observer ── */
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('on'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fi').forEach(function (el) { obs.observe(el); });

  /* ── Accordion ── */
  window.toggleAc = function (id) {
    var item = document.getElementById(id);
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.ac-item').forEach(function (el) {
      el.classList.remove('open');
      var t = el.querySelector('.ac-trigger');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      item.querySelector('.ac-trigger').setAttribute('aria-expanded', 'true');
    }
  };
})();
