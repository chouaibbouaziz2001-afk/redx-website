import { t, getCurrentLang } from '../i18n.js';
import { logoSVG } from '../icons.js';

function getNavLinks() {
  const lang = getCurrentLang();
  if (lang === 'en') {
    return {
      home: '/en/',
      services: '/en/services',
      about: '/en/about',
      portfolio: '/en/portfolio',
      contact: '/en/contact',
    };
  }
  return {
    home: '/',
    services: '/services',
    about: '/a-propos',
    portfolio: '/realisations',
    contact: '/contact',
  };
}

export function renderNavbar() {
  const lang = getCurrentLang();
  const links = getNavLinks();
  return `
    <nav class="navbar" id="navbar">
      <div class="container">
        <a href="${links.home}" class="nav-logo" data-link>
          ${logoSVG}
          <span>REDX</span>
        </a>
        <div class="nav-links" id="nav-links">
          <a href="${links.home}" class="nav-link" data-i18n="nav.home">${t('nav.home')}</a>
          <a href="${links.services}" class="nav-link" data-i18n="nav.services">${t('nav.services')}</a>
          <a href="${links.about}" class="nav-link" data-i18n="nav.about">${t('nav.about')}</a>
          <a href="${links.portfolio}" class="nav-link" data-i18n="nav.portfolio">${t('nav.portfolio')}</a>
          <a href="${links.contact}" class="nav-link" data-i18n="nav.contact">${t('nav.contact')}</a>
        </div>
        <div class="nav-right">
          <div class="lang-toggle">
            <button class="lang-btn ${lang === 'fr' ? 'active' : ''}" data-lang="fr" onclick="window.switchLang('fr')">FR</button>
            <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en" onclick="window.switchLang('en')">EN</button>
          </div>
          <a href="${links.contact}" class="btn btn-primary btn-sm nav-cta" data-i18n="nav.cta">${t('nav.cta')}</a>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu">
      <a href="${links.home}" class="nav-link" data-i18n="nav.home">${t('nav.home')}</a>
      <a href="${links.services}" class="nav-link" data-i18n="nav.services">${t('nav.services')}</a>
      <a href="${links.about}" class="nav-link" data-i18n="nav.about">${t('nav.about')}</a>
      <a href="${links.portfolio}" class="nav-link" data-i18n="nav.portfolio">${t('nav.portfolio')}</a>
      <a href="${links.contact}" class="nav-link" data-i18n="nav.contact">${t('nav.contact')}</a>
      <div class="lang-toggle">
        <button class="lang-btn ${lang === 'fr' ? 'active' : ''}" data-lang="fr" onclick="window.switchLang('fr')">FR</button>
        <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en" onclick="window.switchLang('en')">EN</button>
      </div>
      <a href="${links.contact}" class="btn btn-primary" data-i18n="nav.cta">${t('nav.cta')}</a>
    </div>
  `;
}

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('.nav-link, .btn').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active nav link
  updateActiveLink();
}

export function updateActiveLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const isActive = (href === path) ||
      (href === '/' && path === '/') ||
      (href === '/en/' && (path === '/en' || path === '/en/'));
    link.classList.toggle('active', isActive);
  });
}
