import { t, getCurrentLang } from '../i18n.js';

export function renderPortfolio() {
  const lang = getCurrentLang();
  const contactPath = lang === 'en' ? '/en/contact' : '/contact';
  const projects = [1, 2, 3, 4, 5, 6];

  return `
    <section class="hero" style="min-height: 50vh;">
      <div class="hero-watermark">X</div>
      <div class="hero-content">
        <h1 class="hero-title reveal" data-i18n="portfolio.title">${t('portfolio.title')}</h1>
        <p class="hero-subtitle reveal" data-i18n="portfolio.subtitle">${t('portfolio.subtitle')}</p>
      </div>
    </section>

    <section class="section section-darker">
      <div class="container">
        <div class="portfolio-grid">
          ${projects.map(i => `
            <div class="portfolio-card reveal">
              <div class="portfolio-card-image">
                <span class="x-mark">X</span>
                <div class="portfolio-card-overlay">
                  <span data-i18n="portfolio.view">${t('portfolio.view')}</span>
                </div>
              </div>
              <div class="portfolio-card-body">
                <span class="portfolio-card-tag" data-i18n="portfolio.${i}.tag">${t(`portfolio.${i}.tag`)}</span>
                <h3 class="portfolio-card-title" data-i18n="portfolio.${i}.title">${t(`portfolio.${i}.title`)}</h3>
                <p class="portfolio-card-desc" data-i18n="portfolio.${i}.desc">${t(`portfolio.${i}.desc`)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="cta-banner">
      <div class="hero-watermark">X</div>
      <div class="container cta-banner-content reveal">
        <h2 class="cta-banner-title" data-i18n="cta.title">${t('cta.title')}</h2>
        <p class="cta-banner-subtitle" data-i18n="cta.subtitle">${t('cta.subtitle')}</p>
        <a href="${contactPath}" class="btn btn-white btn-lg" data-i18n="cta.btn">${t('cta.btn')}</a>
      </div>
    </section>
  `;
}
