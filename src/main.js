import './style.css';
import { renderNavbar, initNavbar, updateActiveLink } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderHome } from './pages/home.js';
import { renderServices } from './pages/services.js';
import { renderAbout } from './pages/about.js';
import { renderPortfolio } from './pages/portfolio.js';
import { renderContact } from './pages/contact.js';
import { renderPrivacy, renderTerms } from './pages/legal.js';
import { render404 } from './pages/notfound.js';
import { initHeroCanvas, initScrollReveal } from './effects.js';
import { setLanguage, getCurrentLang, initLang } from './i18n.js';
import { updateSEO } from './seo.js';
import { trackPageView, trackCTAClick, trackLanguageSwitch, trackFormSubmit, trackServiceCardClick, trackContactClick } from './analytics.js';
import { initCookieConsent, updateConsentBannerLang } from './consent.js';

// ========== Route Definitions ==========
// FR routes (default) and EN routes → { render, seoKey }
const routes = {
  // FR routes
  '/': { render: renderHome, seoKey: 'home' },
  '/services': { render: renderServices, seoKey: 'services' },
  '/a-propos': { render: renderAbout, seoKey: 'about' },
  '/realisations': { render: renderPortfolio, seoKey: 'portfolio' },
  '/contact': { render: renderContact, seoKey: 'contact' },
  '/politique-de-confidentialite': { render: renderPrivacy, seoKey: 'privacy' },
  '/conditions-utilisation': { render: renderTerms, seoKey: 'terms' },
  // EN routes
  '/en': { render: renderHome, seoKey: 'home' },
  '/en/': { render: renderHome, seoKey: 'home' },
  '/en/services': { render: renderServices, seoKey: 'services' },
  '/en/about': { render: renderAbout, seoKey: 'about' },
  '/en/portfolio': { render: renderPortfolio, seoKey: 'portfolio' },
  '/en/contact': { render: renderContact, seoKey: 'contact' },
  '/en/privacy-policy': { render: renderPrivacy, seoKey: 'privacy' },
  '/en/terms-of-use': { render: renderTerms, seoKey: 'terms' },
};

// ========== URL ↔ Language Mapping ==========
export function getRouteForPage(pageKey) {
  const lang = getCurrentLang();
  const map = {
    home: { fr: '/', en: '/en/' },
    services: { fr: '/services', en: '/en/services' },
    about: { fr: '/a-propos', en: '/en/about' },
    portfolio: { fr: '/realisations', en: '/en/portfolio' },
    contact: { fr: '/contact', en: '/en/contact' },
    privacy: { fr: '/politique-de-confidentialite', en: '/en/privacy-policy' },
    terms: { fr: '/conditions-utilisation', en: '/en/terms-of-use' },
  };
  return map[pageKey]?.[lang] || '/';
}

function getLangFromPath(path) {
  return path.startsWith('/en') ? 'en' : 'fr';
}

function getCurrentPageKey(path) {
  const route = routes[path] || routes[path.replace(/\/$/, '')] || null;
  return route ? route.seoKey : null;
}

// ========== Language Switch ==========
window.switchLang = (newLang) => {
  const currentPath = window.location.pathname;
  const currentRoute = routes[currentPath] || routes[currentPath.replace(/\/$/, '')];
  const pageKey = currentRoute ? currentRoute.seoKey : 'home';

  setLanguage(newLang);
  updateConsentBannerLang();
  trackLanguageSwitch(newLang);

  // Navigate to the equivalent page in the new language
  const map = {
    home: { fr: '/', en: '/en/' },
    services: { fr: '/services', en: '/en/services' },
    about: { fr: '/a-propos', en: '/en/about' },
    portfolio: { fr: '/realisations', en: '/en/portfolio' },
    contact: { fr: '/contact', en: '/en/contact' },
    privacy: { fr: '/politique-de-confidentialite', en: '/en/privacy-policy' },
    terms: { fr: '/conditions-utilisation', en: '/en/terms-of-use' },
  };
  const newPath = map[pageKey]?.[newLang] || '/';
  navigateTo(newPath);
};

// ========== Navigation ==========
let cleanupCanvas = null;

export function navigateTo(path) {
  window.history.pushState({}, '', path);
  renderCurrentPage();
}

function renderCurrentPage() {
  const path = window.location.pathname;

  // Determine language from URL
  const lang = getLangFromPath(path);
  if (lang !== getCurrentLang()) {
    setLanguage(lang);
  }

  // Find matching route
  const route = routes[path] || routes[path.replace(/\/$/, '')] || null;

  // Cleanup previous canvas animation
  if (cleanupCanvas) {
    cleanupCanvas();
    cleanupCanvas = null;
  }

  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderNavbar()}
    <main id="page-content">
      ${route ? route.render() : render404()}
    </main>
    ${renderFooter()}
  `;

  // Initialize components
  initNavbar();
  updateActiveLink();
  initLang();

  // Update SEO
  updateSEO(route ? route.seoKey : 'home');

  // Track page view
  trackPageView(route ? route.seoKey : '404');

  // Init effects
  cleanupCanvas = initHeroCanvas();
  initScrollReveal();

  // Scroll to top on navigation
  window.scrollTo(0, 0);

  // Bind CTA click tracking
  bindCTATracking();
  bindFormTracking();
  bindServiceCardTracking();
  bindContactLinkTracking();
}

// ========== Event Tracking Bindings ==========
function bindCTATracking() {
  document.querySelectorAll('.btn[data-i18n]').forEach(btn => {
    btn.addEventListener('click', () => {
      trackCTAClick(btn.textContent.trim());
    });
  });
}

function bindFormTracking() {
  const form = document.getElementById('contact-form');
  if (form) {
    // Set dynamic _next URL now that window is available
    const nextInput = form.querySelector('input[name="_next"]');
    if (nextInput) {
      const lang = getCurrentLang();
      nextInput.value = window.location.origin + (lang === 'en' ? '/en' : '') + '/contact?success=1';
    }

    form.addEventListener('submit', () => {
      const select = form.querySelector('.form-select');
      const service = select ? select.value : '';
      trackFormSubmit(service);
      // Let the form POST to Formsubmit.co naturally
    });
  }

  // Show success message if redirected back after submission
  if (window.location.search.includes('success=1')) {
    setTimeout(() => {
      const form = document.getElementById('contact-form');
      if (form) {
        form.innerHTML = `
          <div style="text-align: center; padding: var(--spacing-2xl) var(--spacing-lg);">
            <div style="font-size: 4rem; margin-bottom: var(--spacing-lg);">✅</div>
            <h2 style="font-size: var(--font-size-xl); font-weight: 800; margin-bottom: var(--spacing-md); color: var(--white);">
              ${getCurrentLang() === 'fr' ? 'Merci ! Votre demande a été envoyée.' : 'Thank you! Your request has been sent.'}
            </h2>
            <p style="color: var(--gray-text); font-size: var(--font-size-base);">
              ${getCurrentLang() === 'fr'
            ? 'Nous vous contacterons sous 24 heures pour confirmer votre rendez-vous.'
            : 'We will contact you within 24 hours to confirm your appointment.'}
            </p>
          </div>
        `;
      }
    }, 100);
  }
}

function bindServiceCardTracking() {
  document.querySelectorAll('.card[class*="reveal"]').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.card-title');
      if (title) trackServiceCardClick(title.textContent.trim());
    });
  });
}

function bindContactLinkTracking() {
  document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => trackContactClick());
  });
}

// ========== SPA Link Interception ==========
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]');
  if (!link) return;
  const href = link.getAttribute('href');

  // Only intercept internal links
  if (href && href.startsWith('/') && !href.startsWith('//')) {
    e.preventDefault();
    navigateTo(href);
  }
});

// ========== History API ==========
window.addEventListener('popstate', renderCurrentPage);

// ========== Initial Render ==========
renderCurrentPage();

// ========== Cookie Consent (after initial render) ==========
initCookieConsent();
