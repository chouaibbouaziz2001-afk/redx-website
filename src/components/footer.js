import { t, getCurrentLang } from '../i18n.js';
import { logoSVG } from '../icons.js';

export function renderFooter() {
  const lang = getCurrentLang();
  const links = lang === 'en' ? {
    home: '/en/', services: '/en/services', about: '/en/about',
    portfolio: '/en/portfolio', contact: '/en/contact',
    privacy: '/en/privacy-policy', terms: '/en/terms-of-use',
  } : {
    home: '/', services: '/services', about: '/a-propos',
    portfolio: '/realisations', contact: '/contact',
    privacy: '/politique-de-confidentialite', terms: '/conditions-utilisation',
  };

  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              ${logoSVG}
              <span>REDX</span>
            </div>
            <p class="footer-tagline" data-i18n="footer.tagline">${t('footer.tagline')}</p>
          </div>
          <div>
            <h4 class="footer-col-title" data-i18n="footer.col1">${t('footer.col1')}</h4>
            <div class="footer-links">
              <a href="${links.home}" class="footer-link" data-i18n="nav.home">${t('nav.home')}</a>
              <a href="${links.services}" class="footer-link" data-i18n="nav.services">${t('nav.services')}</a>
              <a href="${links.about}" class="footer-link" data-i18n="nav.about">${t('nav.about')}</a>
              <a href="${links.portfolio}" class="footer-link" data-i18n="nav.portfolio">${t('nav.portfolio')}</a>
              <a href="${links.contact}" class="footer-link" data-i18n="nav.contact">${t('nav.contact')}</a>
            </div>
          </div>
          <div>
            <h4 class="footer-col-title" data-i18n="footer.col2">${t('footer.col2')}</h4>
            <div class="footer-links">
              <a href="${links.services}" class="footer-link" data-i18n="service.1.title">${t('service.1.title')}</a>
              <a href="${links.services}" class="footer-link" data-i18n="service.4.title">${t('service.4.title')}</a>
              <a href="${links.services}" class="footer-link" data-i18n="service.6.title">${t('service.6.title')}</a>
              <a href="${links.services}" class="footer-link" data-i18n="service.7.title">${t('service.7.title')}</a>
              <a href="${links.services}" class="footer-link" data-i18n="service.9.title">${t('service.9.title')}</a>
            </div>
          </div>
          <div>
            <h4 class="footer-col-title" data-i18n="footer.col3">${t('footer.col3')}</h4>
            <div class="footer-links">
              <span class="footer-link" data-i18n="footer.email">${t('footer.email')}</span>
              <span class="footer-link" data-i18n="footer.phone">${t('footer.phone')}</span>
              <span class="footer-link" data-i18n="contact.info.location.value">${t('contact.info.location.value')}</span>
            </div>
            <h4 class="footer-col-title" style="margin-top: var(--spacing-lg);" data-i18n="footer.legal">${t('footer.legal')}</h4>
            <div class="footer-links">
              <a href="${links.privacy}" class="footer-link" data-i18n="footer.privacy">${t('footer.privacy')}</a>
              <a href="${links.terms}" class="footer-link" data-i18n="footer.terms">${t('footer.terms')}</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span data-i18n="footer.rights">${t('footer.rights')}</span>
          <div class="footer-socials">
            <a href="https://www.instagram.com/redxprod?igsh=dnRpa3NuMXdjc3Zo" target="_blank" rel="noopener" class="footer-social" aria-label="Instagram">ig</a>
            <a href="https://www.facebook.com/share/18ErWTowT4/?mibextid=wwXIfr" target="_blank" rel="noopener" class="footer-social" aria-label="Facebook">fb</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
